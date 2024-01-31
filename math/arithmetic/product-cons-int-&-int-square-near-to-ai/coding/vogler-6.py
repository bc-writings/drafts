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

    nb_even_occu = n // p

    if n % p != 0:
        nb_even_occu += 1

    nb_even_occu -= nb_even_occu % 2

    for nbof_p in range(2, nb_even_occu + 1, 2):
        build_p_vogler_recu(n, p, nbof_p)

    # for v in p_vogler:
    #     print(v)

    exit()


def build_p_vogler_recu(n, p, nbof_p, cursor = 0):
    print(f"{n=} , {p=} , {nbof_p=}")



all_p_vogler = {
    p: build_p_vogler(N, p)
    for p in primerange(N)
}
