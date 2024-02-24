from collections import defaultdict
from math        import sqrt, floor

from sympy import primerange, isprime


# --------------- #
# -- CONSTANTS -- #
# --------------- #

VERBOSE = False
# VERBOSE = True

LOG = dict()

TAB_1 = " "*3
TAB_2 = TAB_1 + " "*4


# ---------------------- #
# -- DISTANCE SQUARES -- #
# ---------------------- #

def distsquares(diff_squares):
    solfound = []

    for N in range(1, (diff_squares + 1) // 2 + 1):
        M_square = N**2 - diff_squares

        if M_square > 0:
            M = floor(sqrt(M_square))

            if M != 0 and M**2 == M_square:
                solfound.append((M_square, N**2))

    return solfound


# ----------------- #
# -- PIGEON-HOLE -- #
# ----------------- #

def pigeonhole_candidates(nbfactors):
    primes       = list(primerange(nbfactors))
    nbprimesleft = len(primes)
    maxindice    = nbfactors - 1
    placeleft    = nbfactors
    primeskept   = []
    success      = False

    if placeleft > 2**nbprimesleft:
        success    = True
        primeskept = primes[:]

    while(primes and placeleft > 0):
        p             = primes.pop()
        occumax       = 1 + maxindice // p
        nbprimesleft -= 1

        placeleft -= occumax
        placeleft = max(0, placeleft)

        if placeleft > 2**nbprimesleft:
            primeskept = primes[:]
            success    = True

    return (success, primeskept)


def find_pigeon_killers(nbfactors_min, nbfactors_max):
    assert nbfactors_min <= nbfactors_max

    for nbfactors in range(
        nbfactors_min,
        nbfactors_max + 1
    ):
        print(nbfactors)

        success, candidates = pigeonhole_candidates(nbfactors)

        if not success:
            print(f"{TAB_1}<-- THE PIGEON IS DEAD!")
            exit()

        if VERBOSE:
            print(f"{TAB_1}<-- THE PIGEON TRIES TO FLY...")

        candidates = sf_coef(candidates + [1])


        factors_pairs = set()

        for delta in range(1, nbfactors):
            for sol in distsquares(delta):
                for c in candidates:
                    if delta <= ((nbfactors -1) // c):
                        factors_pairs.add((c*sol[0], c*sol[1]))

        if VERBOSE:
            print(f"{TAB_2}{factors_pairs=}")


        n_tested = set()

        for (fmin, fmax) in factors_pairs:
            n_tested = n_tested.union(
                set(
                    range(
                        max(1, fmax - nbfactors + 1),
                        fmin + nbfactors
                    )
                )
            )

        if VERBOSE:
            print(f"{TAB_2}{n_tested=}")


        nb_bad = len(n_tested)

        for n in n_tested:
            for f in range((n + nbfactors) // 2 + 1, n + nbfactors):
                if isprime(f):
                    # if VERBOSE:
                    #     print(f"{TAB_2}{n} + {i}={n + i}")

                    nb_bad -= 1
                    break


        if nb_bad != 0:
            print(f"{TAB_2}IT'S A FAIL!")
            exit()

        print(f"{TAB_1}<-- THE PIGEON IS FLYING HIGH!")


def sf_coef(candidates):
    if not candidates:
        return set()


    coefs = set([a := candidates.pop()])

    for b in sf_coef(candidates):
        if a != 1:
            coefs.add(b)

        coefs.add(a*b)

    return coefs


# --------------------- #
# -- HOME-MADE TESTS -- #
# --------------------- #

if __name__ == '__main__':
    from collections import defaultdict
    from pprint import pprint


    # results_card  = defaultdict(int)
    # results_which = defaultdict(list)
    # failures      = list()

    # nmax = 100

    # for n in range(2, nmax+1):
    #     success, candidates = pigeonhole_candidates(n)

    #     if not success:
    #         failures.append(n)

    #     else:
    #         nb_candidates = len(candidates)

    #         # print(f"{n=} : {pigeonhole_candidates(n):}")
    #         # print(f"{n=}")

    #         results_card[nb_candidates] += 1
    #         results_which[nb_candidates].append(n)

    # pprint(results_card)
    # pprint(results_which)
    # pprint(failures)

    # print(len(failures) / (nmax - 1) * 100)


    # for candidates in [
    #     [2, 3],
    #     [2, 3, 5],
    # ]:
    #     print(f'--- {candidates} ---')

    #     for coef in coefsquare(candidates + [1]):
    #         print(coef)


    # print(f"{sf_coef([2, 3])}")


    # find_pigeon_killers(2, 12)
    find_pigeon_killers(9, 100)

    # from pprint import pprint
    # pprint(LOG)

    # for n in range(2, 19):
    #     print(f'--- {n} ---')
    #     print(pigeonhole_candidates(n))
