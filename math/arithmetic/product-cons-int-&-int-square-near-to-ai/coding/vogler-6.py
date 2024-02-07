N = 11


ILLEGAL_SUB_VOGLER = [
# Found when solving 4 factors by hand.
    [6, 1, 2, 3],
    [3, 2, 1, 6],
]


from sympy import primerange


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
