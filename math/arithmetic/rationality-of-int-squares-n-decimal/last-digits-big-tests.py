from sympy import sieve

NMIN = 40
NMAX = 42

MAX_POWER = 2

VERBOSE = False
VERBOSE = True


def build_datas(tenpower, N):
    lastdigits_for_N = []

    for i in range(tenpower):
        square = (i**2)%tenpower
        N_square = (N*square)%tenpower

        lastdigits_for_N.append(N_square)

    return lastdigits_for_N


def allmultiplesof(k, integers):
    return all(n % k == 0 for n in integers)


def onlymultiplesof(k, integers_1, integers_2):
    return allmultiplesof(k, integers_1) \
       and allmultiplesof(k, integers_2)


def analyze(tenpower, lastdigits, lastdigits_for_N):
    common = set(lastdigits).intersection(lastdigits_for_N)

    lastdigits_up   = []
    lastdigits_down = []

    for i in range(tenpower):
        if lastdigits[i] in common:
            lastdigits_up.append(i)

        if lastdigits_for_N[i] in common:
            lastdigits_down.append(i)

    return lastdigits_up, lastdigits_down


def validate(lastdigits_up, lastdigits_down):
    if not onlymultiplesof(2, lastdigits_up, lastdigits_down) \
    and not onlymultiplesof(5, lastdigits_up, lastdigits_down):
        return False

    return True


N_validated = []

primes_to_test = [N for N in sieve.primerange(NMIN, NMAX + 1)]

for p in range(1, MAX_POWER + 1):
    tenpower   = 10**p
    lastdigits = build_datas(tenpower, 1)

    i = 0
    imax = len(primes_to_test) - 1

    while(i <= imax):
        N = primes_to_test[i]

        lastdigits_for_N = build_datas(tenpower, N)

        lastdigits_up, lastdigits_down = analyze(
            tenpower,
            lastdigits,
            lastdigits_for_N
        )

        if validate(lastdigits_up, lastdigits_down):
            primes_to_test.pop(i)
            imax -= 1

        else:
            i += 1

            if VERBOSE:
                print(
f"""
--- {N} & 10**{p} ---

lastdigits_up:
{lastdigits_up}

lastdigits_down:
{lastdigits_down}
"""
                )


primes_to_test = [str(N) for N in primes_to_test]

print(f"{len(primes_to_test)} tests failed : {' , '.join(primes_to_test)}")
print(f"INfo -> MAX_POWER = {MAX_POWER}")
