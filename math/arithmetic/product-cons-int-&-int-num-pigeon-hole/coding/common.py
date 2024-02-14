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

def pigeonhole(nbfactors):
    primes       = list(primerange(nbfactors))
    nbprimesleft = len(primes)
    maxindice    = nbfactors - 1
    placeleft    = nbfactors
    primeskept   = []

    while(primes):
        p             = primes.pop()
        occumax       = 1 + maxindice // p
        nbprimesleft -= 1

        placeleft -= occumax

        if placeleft > 2**nbprimesleft:
            primeskept = primes[:]

    return primeskept


# --------------------- #
# -- HOME-MADE TESTS -- #
# --------------------- #

if __name__ == '__main__':
    from collections import defaultdict

    results = defaultdict(int)

    for n in range(2, 101):
        # print(f'--- {n} ---')
        # print(pigeonhole(n))

        results[len(pigeonhole(n))] += 1

    print(results)

    results = defaultdict(list)

    for n in range(2, 101):
        results[len(pigeonhole(n))].append(n)

    print(results)
