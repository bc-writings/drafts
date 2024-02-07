from sympy import primerange


ILLEGAL_SUB_SFTABS = [
# Found when solving 4 factors by hand.
    [6, 1, 2, 3],
    [3, 2, 1, 6],
]


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

    for pos in build_pos_sftab_recu(k, p, cursor + 2*p, False):
        allpos.append(initialpos + pos)

# Recursive call to obtain more.

# Recursive call to adavance of one step.
    if first:
        allpos += build_pos_sftab_recu(k, p, cursor + 1, first)

# No more job to do.
    return allpos
