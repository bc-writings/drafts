N = 11


ILLEGAL_SUB_VOGLER = [
# 4 factors by hand.
    [6, 1, 2, 3],
    [3, 2, 1, 6],
]


from sympy import primerange


def build_p_vogler(p, n):
    p_vogler = [
        [1 for p in range(n)]
    ]

    print(p, n)

    nb_occu = n // p
    nb_occu = nb_occu - (nb_occu % p)

    print(nb_occu)

    for v in p_vogler:
        print(v)

    exit()



all_p_vogler = {
    p: build_p_vogler(p, N)
    for p in primerange(N)
}
