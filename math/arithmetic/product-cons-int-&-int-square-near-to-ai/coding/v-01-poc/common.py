from collections import defaultdict
import                  re

from sympy import primerange


# --------------- #
# -- CONSTANTS -- #
# --------------- #

VERBOSE = False
# VERBOSE = True

LOG = dict()

DIST_NO_SOL = {1, 2, 4, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58, 62, 66, 70, 74, 78, 82, 86, 90, 94, 98}
# DIST_NO_SOL = {}

ZERO_SOL_NOT_DIV_TAG    = "Zero sol dist [not div by]"
ZERO_SOL_NOT_ENOUGH_TAG = "Zero sol dist [not enough]"

LOG[ZERO_SOL_NOT_DIV_TAG]    = set()
LOG[ZERO_SOL_NOT_ENOUGH_TAG] = defaultdict(set)


# ------------------------------ #
# -- ILLEGAL HUMAN SUB SFTABS -- #
# ------------------------------ #

ILLEGAL_HUMAN_SUB_SFTABS_REGEX = [
# Found when solving 4 factors by hand.
    "(\d+-)*6-1-2-3(-\d+)*",
    "(\d+-)*3-2-1-6(-\d+)*",
# Found when solving 6 factors by hand.
    "(\d+-)*1-6-\d+-2-3(-\d+)*",
    "(\d+-)*3-2-\d+-6-1(-\d+)*",
# Found when solving 9 factors by hand.
    "(\d+-)*1-(\d+-){2}1(-\d+)*",
    "(\d+-)*1-(\d+-){7}1(-\d+)*",
]

ILLEGAL_HUMAN_SUB_SFTABS_REGEX = [
    re.compile(f"^{p}$")
    for p in ILLEGAL_HUMAN_SUB_SFTABS_REGEX
]

# ----------- #
# -- BUILD -- #
# ----------- #

def build_n_ones(nbfactors):
    return [1 for _ in range(nbfactors)]


def build_one_prime_sftab(nbfactors, prime, positions):
    return [
        prime
        if i in positions else
        1
        for i in range(nbfactors)
    ]


def build_prime_sftabs(nbfactors, prime):
    prime_sftabs  = [build_n_ones(nbfactors)]
    prime_sftabs += [
        build_one_prime_sftab(nbfactors, prime, positions)
        for positions in build_pos_sftab_recu(nbfactors, prime)
    ]

    return prime_sftabs


def build_pos_sftab_recu(
    nbfactors,
    prime,
    cursor     = 0,
    stepcursor = 1
):
    allpos = []

    for pos_1 in range(cursor, nbfactors, stepcursor):
        for pos_2 in range(pos_1 + prime, nbfactors, prime):
            allpos.append(couple := [pos_1, pos_2])

            for subpos in build_pos_sftab_recu(
                nbfactors,
                prime,
                pos_2 + prime,
                stepcursor = prime
            ):
                allpos.append(couple + subpos)

    return allpos


def prod_of(sftab_1, sftab_2):
    prod = [
        a * b
        for a, b in zip(sftab_1, sftab_2)
    ]

    return prod


def is_illegal_zero_sol(nbfactors, sftable):
    candidates = set()

    for elt in set(sftable):
        if sftable.count(elt) == 1:
            continue

        candidates.add(elt)

    for elt in candidates:
        if is_illegal_zero_sol_recu(
            nbfactors, sftable,
            elt,
            sftable.index(elt),
            sftable.count(elt)
        ):
            return True

    return False


def is_illegal_zero_sol_recu(nbfactors, sftable, elt, pos, nb_elt):
    global LOG

    if nb_elt == 1:
        return False

    for i, e in enumerate(sftable):
        if i <= pos:
            continue

        if e == elt:
            idelta = i - pos

            # print(f"{elt=} , {pos=} , {i=} , {idelta=}")
            if idelta % elt != 0:
                LOG[ZERO_SOL_NOT_DIV_TAG].add(elt)

                if VERBOSE:
                    print(f"\n+ {ZERO_SOL_NOT_DIV_TAG}: {elt=} in {sftable=}")

                return True

            if idelta // elt in DIST_NO_SOL:
                LOG[ZERO_SOL_NOT_ENOUGH_TAG][elt].add(i)

                if VERBOSE:
                    print(f"\n+ {ZERO_SOL_NOT_ENOUGH_TAG}: {elt=} in {sftable=}")

                return True

    return is_illegal_zero_sol_recu(
        nbfactors,
        sftable,
        elt,
        sftable.index(elt, pos + 1),
        nb_elt - 1
    )


def is_illegal_subtab(nbfactors, sftable):
    sftable = "-".join(str(x) for x in sftable)

    for p in ILLEGAL_HUMAN_SUB_SFTABS_REGEX:
        if p.match(sftable):
                   return True

    return False


# ---------------- #
# -- NO MORE PB -- #
# ---------------- #

def find_pb_sftabs(nbfactors):
    assert nbfactors > 2

    global LOG

    LOG[ZERO_SOL_NOT_DIV_TAG]    = set()
    LOG[ZERO_SOL_NOT_ENOUGH_TAG] = defaultdict(set)

    partial_sftabs = [
        build_prime_sftabs(nbfactors, p)
        for p in primerange(nbfactors)
    ]

    pb_sftabs = []

    # from pprint import pprint;pprint(partial_sftabs);exit()

    for sftab in sftabs_prod_rec(nbfactors, partial_sftabs):
        # print(f"{sftab=}")

# No one is innocent...
        if sftab[0] == 1 or sftab[-1] == 1:
            if VERBOSE:
                print(f"\n+ No one is innocent: {sftab=}")

            continue

# Illegal ?
        isillegal = False

        for tester in [
            is_illegal_zero_sol,
            is_illegal_subtab,
        ]:
            if tester(nbfactors, sftab):
                isillegal = True
                break

        if isillegal:
            continue

# No pb found...
        pb_sftabs.append(sftab)

    return pb_sftabs


def sftabs_prod_rec(nbfactors, partial_sftabs):
    if len(partial_sftabs) == 1:
        for ptab in partial_sftabs[0]:
            # print(f"{ptab=}")
            yield ptab

    else:
        for sftab_1 in partial_sftabs[0]:
            for sftab_2 in sftabs_prod_rec(
                nbfactors,
                partial_sftabs[1:],
            ):
                # print(f"{prod_of(sftab_1, sftab_2)=}")
                yield prod_of(sftab_1, sftab_2)


# --------------------- #
# -- HOME-MADE TESTS -- #
# --------------------- #

if __name__ == '__main__':
    from pprint import pprint

    # for pb in [
    #     [2, 3, 2, 1, 3],
    #     [14, 15, 2, 1, 3, 1, 5, 7],
    # ]:
    #     print()
    #     print(f"{pb=}")

    #     result = is_illegal_zero_sol(len(pb), pb)

    #     print(f"{result=}")

    # print(LOG)

    # exit()

    for p in [3, 5]:
        # for n in list(range(3, 8)) + [9]:
        for n in [6]:
            print(f"\nbuild_prime_sftabs({n}, {p})")

            for t in build_prime_sftabs(n, p):
                print(' '*16 + "& " + " & ".join(str(x) for x in t))
                print(' '*8 + '\\\\')
