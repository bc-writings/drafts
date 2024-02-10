from sympy import primerange


# --------------- #
# -- CONSTANTS -- #
# --------------- #

VERBOSE = False
# VERBOSE = True

DIST_NO_SOL = {1, 2, 4, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58, 62, 66, 70, 74, 78, 82, 86, 90, 94, 98}


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
    p_sftabs = [build_n_ones(nbfactors)]

    for positions in build_pos_sftab_recu(nbfactors, prime):
        p_sftabs.append(
            build_one_prime_sftab(nbfactors, prime, positions)
        )

    return p_sftabs


def build_pos_sftab_recu(
    nbfactors,
    prime,
    cursor = 0,
    first  = True
):
# No more place left.
    if cursor + prime >= nbfactors:
        return []

# Just two more.
    allpos = []
    m = 1

    while(cursor + m*prime < nbfactors):
        allpos.append([cursor, cursor + m*prime])

# Recursive call to obtain more.
        nextpos = m*prime + prime

        while(nextpos < nbfactors):
            for positions in build_pos_sftab_recu(
                nbfactors,
                prime,
                cursor + nextpos,
                False
            ):
                allpos.append(positions)

            nextpos += prime

        prime += prime

# Recursive call to advance of just one step.
    if first:
        allpos += build_pos_sftab_recu(
            nbfactors,
            prime,
            cursor + 1,
            first
        )

# No more job to do.
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
            # print(f">>> {elt=}")
            return True

    return False


def is_illegal_zero_sol_recu(nbfactors, sftable, elt, positions, nb_elt):
    if nb_elt == 1:
        return False

    for i, e in enumerate(sftable, positions):
        if e == elt:
            idelta = i - positions

            if idelta % elt != 0:
                if VERBOSE:
                    print(f"+ Zero Sol: {elt=} in {sftable=}")

                return True

            if idelta // elt in DIST_NO_SOL:
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

    for sftab in find_pb_sftabs_recu(nbfactors, partial_sftabs, kprimes):
        print(f">>> {sftab=}")
# No one is innocent...
        # if sftab[0] == 1 or sftab[-1] == 1:
        #     if VERBOSE:
        #         print(f"+ No one is innocent: {sftab=}")

        #     continue


# # Illegal human sub sf-table?
#     # if prod in ILLEGAL_HUMAN_SUB_SFTABS:
#     #     return None

# # Illegal dist squares?
#
#     if is_illegal_zero_sol(nbfactors, prod):
#         return None

# No pb found...
        pb_sftabs.append(sftab)

    return pb_sftabs


def find_pb_sftabs_recu(nbfactors, partial_sftabs, kprimes):
    if len(partial_sftabs) == 1:
        return partial_sftabs[0]

    all_prods = []

    for sftab_1 in partial_sftabs[0]:
        for sftab_2 in find_pb_sftabs_recu(
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

    for n in range(3, 8):
        print(f"build_prime_sftabs({n}, 2)")

        for t in build_prime_sftabs(n, 2):
            print(t)
