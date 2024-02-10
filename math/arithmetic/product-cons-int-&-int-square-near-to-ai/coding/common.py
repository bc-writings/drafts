from sympy import primerange


# --------------- #
# -- CONSTANTS -- #
# --------------- #

VERBOSE = False
# VERBOSE = True

DIST_NO_SOL = {1, 2, 4, 6, 10, 14, 18}


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

def build_n_ones(k):
    return [1 for _ in range(k)]


def build_one_prime_sftab(k, p, pos):
    return [
        p
        if i in pos else
        1
        for i in range(k)
    ]


def build_prime_sftabs(k, p):
    p_sftabs = [build_n_ones(k)]

    for pos in build_pos_sftab_recu(k, p):
        p_sftabs.append(
            build_one_prime_sftab(k, p, pos)
        )

    return p_sftabs


def build_pos_sftab_recu(k, p, cursor = 0, first = True):
    TODO
# No more place left.
    if cursor + p >= k:
        return []

# Just two more.
    allpos = []
    m = 1

    while(cursor + m*p < k):
        allpos.append([cursor, cursor + m*p])

# Recursive call to obtain more.
        nextpos = m*p + p

        while(nextpos < k):
            for pos in build_pos_sftab_recu(k, p, cursor + nextpos, False):
                allpos.append(initialpos + pos)

            nextpos += p

        p += p

# Recursive call to advance of just one step.
    if first:
        allpos += build_pos_sftab_recu(k, p, cursor + 1, first)

# No more job to do.
    return allpos


def prod_of(k, sftab_1, sftab_2, kprimes):
    prod = [
        a * b
        for a, b in zip(sftab_1, sftab_2)
    ]

    return prod


def is_illegal_zero_sol(k, sftable):
    candidates = set()

    for elt in set(sftable):
        if sftable.count(elt) == 1:
            continue

        candidates.add(elt)

    for elt in candidates:
        if is_illegal_zero_sol_recu(
            k, sftable,
            elt,
            sftable.index(elt),
            sftable.count(elt)
        ):
            # print(f">>> {elt=}")
            return True

    return False


def is_illegal_zero_sol_recu(k, sftable, elt, pos, nb_elt):
    if nb_elt == 1:
        return False

    for i, e in enumerate(sftable, pos):
        if e == elt:
            idelta = i - pos

            if idelta % elt != 0:
                if VERBOSE:
                    print(f"+ Zero Sol: {elt=} in {sftable=}")

                return True

            if idelta // elt in DIST_NO_SOL:
                if VERBOSE:
                    print(f"+ Zero Sol: {elt=} in {sftable=}")

                return True

    return is_illegal_zero_sol_recu(
        k,
        sftable,
        elt,
        sftable.index(elt, pos + 1),
        nb_elt - 1
    )


# ------------- #
# -- ANALYSE -- #
# ------------- #

def find_pb_sftabs(k):
    kprimes = list(primerange(k))

    partial_sftabs = [
        build_prime_sftabs(k, p)
        for p in kprimes
    ]

    # from pprint import pprint;pprint(partial_sftabs)

    pb_sftabs = []

    for sftab in find_pb_sftabs_recu(k, partial_sftabs, kprimes):
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
#     if is_illegal_zero_sol(k, prod):
#         return None

# No pb found...
        pb_sftabs.append(sftab)

    return pb_sftabs


def find_pb_sftabs_recu(k, partial_sftabs, kprimes):
    if len(partial_sftabs) == 1:
        return partial_sftabs[0]

    all_prods = []

    for sftab_1 in partial_sftabs[0]:
        for sftab_2 in find_pb_sftabs_recu(
            k,
            partial_sftabs[1:],
            kprimes
        ):
            prod = prod_of(
                k,
                sftab_1, sftab_2,
                kprimes
            )

            all_prods.append(prod)

    return all_prods


# -------------------------- #
# -- HOMEMADE TESTS -- #
# ------------- #

if __name__ == '__main__':
    TODO
