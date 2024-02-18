from collections import defaultdict
from math        import sqrt, floor

from sympy import primerange


# --------------- #
# -- CONSTANTS -- #
# --------------- #

VERBOSE = False
VERBOSE = True

LOG = dict()


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

def find_pigeon_killers(nbfactors_min, nbfactors_max):
    for nbfactors in range(
        nbfactors_min,
        nbfactors_max + 1
    ):
        print(nbfactors)

        tab = ' '*(len(f"{nbfactors}   <-- "))

        candidates = pigeonhole_candidates(nbfactors)

        if len(candidates) == 0:
            print(f"{tab}FAILS!")
            exit()

        if VERBOSE:
            print(' <-- PIGEON TRIES TO FLY...')

        factors = defaultdict(set)

        for coef in coefsquare(candidates + [1]):
            for df in range(1, (nbfactors - 1) // coef + 1 ):
                sols = distsquares(diff_squares = df)

                if not sols:
                    continue

                # print(f"{tab}{coef=} , {df=} , {sols=}")

                factors[coef] = factors[coef].union(set(sols))

        if VERBOSE:
            print(f"{tab}{factors=}")

        nmax = 0

        for coef, sols in factors.items():
            nmax = max(
                nmax,
                coef * max(min(x, y)**2 for x, y in sols)
            )

        if VERBOSE:
            print(f"{tab}{nmax=}")

        if notsingleprimediv(nbfactors, nmax, tab):
            print(f"{tab}FAILS!")
            exit()


def notsingleprimediv(nbfactors, nmax, tab):
    nbsuccess = 0

    for n in range(1, nmax + 1):

        primes = {
            p: 0
            for p in primerange(n, n + nbfactors)
        }

        for k in range(1, nbfactors + 1):
            npk = n + k

            if npk in primes:
                primes[npk] += 1

        if VERBOSE:
            print(f"{tab}{n=} : {primes=}")

        for p, pval in primes.items():
            if pval % 2 == 1:
                if VERBOSE:
                    print(f"{tab}{p=}")

                nbsuccess += 1
                break

    return nbsuccess != nmax


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

    find_pigeon_killers(99, 100)

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


    # for candidates in [
    #     [2, 3],
    #     [2, 3, 5],
    # ]:
    #     print(f'--- {candidates} ---')

    #     for coef in coefsquare(candidates + [1]):
    #         print(coef)
