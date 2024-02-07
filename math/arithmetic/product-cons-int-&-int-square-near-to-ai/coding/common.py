from sympy import primerange


# --------------- #
# -- CONSTANTS -- #
# --------------- #

DIST_ZERO_SOL = {1, 2, 4, 6, 10, 14, 18}

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
# No more place left.
    if cursor + p >= k:
        return []

# Just two more.
    initialpos = [cursor, cursor + p]

    allpos = [initialpos]

# Recursive call to obtain more.
    nextpos = 2*p

    while(nextpos < k):
        for pos in build_pos_sftab_recu(k, p, cursor + nextpos, False):
            allpos.append(initialpos + pos)

        nextpos += p

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

# No one is innocent (at the end or the start).
    if prod[0] == 1 or prod[-1] == 1:
        return None

# Illegal human sub sf-table?
    if prod in ILLEGAL_HUMAN_SUB_SFTABS:
        return None

# Illegal dist squares?
    if is_illegal_zero_sol(k, prod):
        return None

# No more tactic to apply for the moment...
    return prod


def is_illegal_zero_sol(k, sftable):
    print(sftable[:-1])
    print(sftable)
    exit()
    for elt_1 in sftable[:-1]:
        return False



    # while(1 in sftable[pos + 1:]):
    #     if sftable[pos + 1] == 1:
    #         return True

    #     pos += 1
    #     pos  = sftable[pos:].index(1)

    return False



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

    return find_pb_sftabs_recu(k, partial_sftabs, kprimes)


def find_pb_sftabs_recu(k, partial_sftabs, kprimes):
    if len(partial_sftabs) == 1:
        return partial_sftabs[0]

    pb_prods = []

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

            if not prod is None:
                pb_prods.append(prod)

    return pb_prods
