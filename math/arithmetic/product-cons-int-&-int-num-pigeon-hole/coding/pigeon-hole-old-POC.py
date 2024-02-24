from collections import defaultdict
from math        import sqrt, floor

from sympy import primerange


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
                solfound.append((M, N))

    return solfound


# ----------------- #
# -- PIGEON-HOLE -- #
# ----------------- #

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

        factors = defaultdict(set)

        for coef in sf_coef(candidates + [1]):
            for df in range(1, (nbfactors - 1) // coef + 1 ):
                sols = distsquares(diff_squares = df)

                if not sols:
                    continue

                # print(f"{TAB_2}{coef=} , {df=} , {sols=}")

                factors[coef] = factors[coef].union(set(sols))

        # if VERBOSE:
        #     print(f"{TAB_2}{factors=}")

        nmax = 0

        for coef, sols in factors.items():
            nmax = max(
                nmax,
                coef * max(min(x, y)**2 for x, y in sols)
            )

        if VERBOSE:
            print(f"{TAB_2}{nmax=}")

        if nosingleprimediv(nbfactors, nmax):
            print(f"{TAB_2}IT'S A FAIL!")
            exit()

        print(f"{TAB_1}<-- THE PIGEON IS FLYING HIGH!")


# We are looking for a prime p of valuation equal to one: we must
# have 2p > last_factor, i.e. last_factor / 2 < p <= last_factor .
def nosingleprimediv(nbfactors, nmax):
    global LOG

    nbsuccess = 0
    results   = set()

    for n in range(1, nmax + 1):
        last_factor = n + nbfactors - 1

        firstprime = last_factor // 2

        if last_factor % 2 == 0:
            firstprime += 1

        primes = {
            p
            for p in primerange(firstprime, last_factor + 1)
        }

        if VERBOSE:
            print(f"{TAB_2}{n=}...{last_factor=}")
            print(f"{TAB_2}    + {primes=}")

        for k in range(1, nbfactors + 1):
            npk = n + k

            # print(f"{n=} , {k=}")
            if npk in primes:
                if VERBOSE:
                    print(f"{TAB_2}    + {npk=}")

                results.add(npk)

                nbsuccess += 1
                break

    if nbsuccess == nmax:
        LOG[nbfactors] = {
            'tactic': "single_prime_div",
            'primes': results,
        }

    return nbsuccess != nmax


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


def sf_coef(candidates):
    if candidates:
        a = candidates.pop()

        yield a

        for b in sf_coef(candidates):
            if a != 1:
                yield b

            yield a*b


# --------------------- #
# -- HOME-MADE TESTS -- #
# --------------------- #

if __name__ == '__main__':
    from collections import defaultdict
    from pprint import pprint

    # find_pigeon_killers(9, 100)

    # from pprint import pprint
    # pprint(LOG)

    # for n in range(2, 19):
    #     print(f'--- {n} ---')
    #     print(pigeonhole_candidates(n))

    results_card  = defaultdict(int)
    results_which = defaultdict(list)
    failures      = list()

    nmax = 100

    for n in range(2, nmax):
        success, candidates = pigeonhole_candidates(n)

        if not success:
            failures.append(n)

        nb_candidates = len(candidates)

        # print(f"{n=} : {pigeonhole_candidates(n):}")
        print(f"{n=}")

        results_card[nb_candidates] += 1
        results_which[nb_candidates].append(n)

    # pprint(results_card)
    # pprint(results_which)
    print(len(failures) / (nmax - 1) * 100)


    # for candidates in [
    #     [2, 3],
    #     [2, 3, 5],
    # ]:
    #     print(f'--- {candidates} ---')

    #     for coef in coefsquare(candidates + [1]):
    #         print(coef)
