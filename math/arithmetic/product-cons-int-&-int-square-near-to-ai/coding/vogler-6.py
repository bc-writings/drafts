N = 11


ILLEGAL_SUB_VOGLER = [
# Found when solving 4 factors by hand.
    [6, 1, 2, 3],
    [3, 2, 1, 6],
]


from sympy import primerange


# Vogler table.

# n = 6
#
# [1, 1, 1, 1, 1, 1]
# [2, 1, 2, 1, 2, 1]    --> occu max = 3
# [3, 1, 1, 3, 1, 1]    --> occu max = 2
# [5, 1, 1, 1, 1, 5]    --> occu max = 2

# n = 10
#
# [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
# [2, 1, 2, 1, 2, 1, 2, 1, 2, 1]    --> occu max = 5
# [3, 1, 1, 3, 1, 1, 3, 1, 1, 3]    --> occu max = 4
# [5, 1, 1, 1, 1, 5, 1, 1, 1, 1]    --> occu max = 2
# [7, 1, 1, 1, 1, 1, 1, 7, 1, 1]    --> occu max = 2

# n = 11
#
# [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
# [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]    --> occu max = 6
# [3, 1, 1, 3, 1, 1, 3, 1, 1, 3, 1]    --> occu max = 4
# [5, 1, 1, 1, 1, 5, 1, 1, 1, 1, 5]    --> occu max = 3
# [7, 1, 1, 1, 1, 1, 1, 7, 1, 1, 1]    --> occu max = 2


def build_p_vogler(n, p):
    p_vogler = [
        [1 for p in range(n)]
    ]

    exit()


def build_p_vogler_recu(n, p, nbof_p, cursor = 0):
    ...



all_p_vogler = {
    p: build_p_vogler(N, p)
    for p in primerange(N)
}
