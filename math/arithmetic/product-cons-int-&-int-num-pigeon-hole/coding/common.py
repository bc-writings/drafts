from math import sqrt, floor

from sympy import primerange


# ---------------------- #
# -- DISTANCE SQUARES -- #
# ---------------------- #

def distsquares(diff_squares):
    solfound = []

    for i in range(1, (diff_squares + 1) // 2 + 1):
        tested = i**2 - diff_squares

        if tested < 0:
            continue

        tested = floor(sqrt(i**2 - diff_squares))

        if tested == 0:
            continue

        if tested**2 == i**2 - diff_squares:
            solfound.append((i, tested))

    return solfound


# ----------------- #
# -- PIGEON-HOLE -- #
# ----------------- #

SOL_OF  = {}
SET_ONE = set([1])


def pigeonhole_candidates(nbfactors):
    primes       = list(primerange(nbfactors))
    nbprimesleft = len(primes)
    maxindice    = nbfactors - 1
    placeleft    = nbfactors
    primeskept   = []

    while(primes and placeleft > 0):
        p             = primes.pop()
        occumax       = 1 + maxindice // p
        nbprimesleft -= 1

        placeleft -= occumax

        if placeleft > 2**nbprimesleft:
            primeskept = primes[:]

    return primeskept


def coefsquare(candidates):
    if candidates:
        a = candidates.pop()

        yield a

        for b in coefsquare(candidates):
            if a != 1:
                yield b

            yield a*b


# --------------------- #
# -- HOME-MADE TESTS -- #
# --------------------- #

if __name__ == '__main__':
    from collections import defaultdict
    from pprint import pprint

    # for n in range(2, 19):
    #     print(f'--- {n} ---')
    #     print(pigeonhole_candidates(n))

    # results_card  = defaultdict(int)
    # results_which = defaultdict(list)

    # for n in range(2, 500):
    #     nb_candidates = len(pigeonhole_candidates(n))

    #     results_card[nb_candidates] += 1
    #     results_which[nb_candidates].append(n)

    # pprint(results_card)
    # pprint(results_which)


    for candidates in [
        [2, 3],
        [2, 3, 5],
    ]:
        print(f'--- {candidates} ---')

        for coef in coefsquare(candidates + [1]):
            print(coef)
