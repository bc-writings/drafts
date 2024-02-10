from collections import defaultdict

from sympy import primerange


# --------------- #
# -- CONSTANTS -- #
# --------------- #

VERBOSE = False
# VERBOSE = True

LOG = dict()

DIST_NO_SOL = {1, 2, 4, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58, 62, 66, 70, 74, 78, 82, 86, 90, 94, 98}

ZERO_SOL_NOT_DIV_TAG    = "zero sol dist [not div by]"
ZERO_SOL_NOT_ENOUGH_TAG = "zero sol dist [not enough]"

LOG[ZERO_SOL_NOT_DIV_TAG]    = set()
LOG[ZERO_SOL_NOT_ENOUGH_TAG] = defaultdict(set)


# ------------------------------ #
# -- ILLEGAL HUMAN SUB SFTABS -- #
# ------------------------------ #

ILLEGAL_HUMAN_SUB_SFTABS = [
# Found when solving 4 factors by hand.
    [6, 1, 2, 3],
    [3, 2, 1, 6],
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


def is_illegal_zero_sol_recu(nbfactors, sftable, elt, positions, nb_elt):
    if nb_elt == 1:
        return False

    for i, e in enumerate(sftable, positions):
        if e == elt:
            idelta = i - positions

            if idelta % elt != 0:
                LOG[ZERO_SOL_NOT_DIV_TAG].add(elt)

                if VERBOSE:
                    print(f"+ Zero Sol: {elt=} in {sftable=}")

                return True

            if idelta // elt in DIST_NO_SOL:
                LOG[ZERO_SOL_NOT_ENOUGH_TAG][elt].add(idelta)

                if VERBOSE:
                    print(f"+ Zero Sol: {elt=} in {sftable=}")

                return True

    return is_illegal_zero_sol_recu(
        nbfactors,
        sftable,
        elt,
        sftable.index(elt, positions + 1),
        nb_elt - 1
    )


# ---------------- #
# -- NO MORE PB -- #
# ---------------- #

def find_pb_sftabs(nbfactors):
    kprimes = list(primerange(nbfactors))

    partial_sftabs = [
        build_prime_sftabs(nbfactors, p)
        for p in kprimes
    ]

    pb_sftabs = []

    for sftab in sftabs_prod_rec(nbfactors, partial_sftabs, kprimes):
# No one is innocent...
        if sftab[0] == 1 or sftab[-1] == 1:
            if VERBOSE:
                print(f"+ No one is innocent: {sftab=}")

            continue


# # Illegal human sub sf-table?
#     # if prod in ILLEGAL_HUMAN_SUB_SFTABS:
#     #     return None

# Illegal dist squares?
        if is_illegal_zero_sol(nbfactors, sftab):
            continue

# No pb found...
        pb_sftabs.append(sftab)

    return pb_sftabs


def sftabs_prod_rec(nbfactors, partial_sftabs, kprimes):
    if len(partial_sftabs) == 1:
        return partial_sftabs[0]

    all_prods = []

    for sftab_1 in partial_sftabs[0]:
        for sftab_2 in sftabs_prod_rec(
            nbfactors,
            partial_sftabs[1:],
            kprimes
        ):
            all_prods.append(prod_of(sftab_1, sftab_2))

    return all_prods


# --------------------- #
# -- HOME-MADE TESTS -- #
# --------------------- #

if __name__ == '__main__':
    from pprint import pprint

    for p in [2, 3, 5]:
        # for n in list(range(3, 8)) + [9]:
        for n in [6]:
            print(f"\nbuild_prime_sftabs({n}, {p})")

            for t in build_prime_sftabs(n, p):
                print(t)
