# N_MAX = 10**6
#
# winners = XXX

from sympy import primerange

print("Start.")

N1_MAX = 10**6
N2_MAX = 10**6
N3_MAX = 10**6


def shortlist(mylist):
    newlist = []

    for p in mylist:
        if p == 1:
            continue

        newlist.append(p)

    newlist.sort()

    return newlist


winners = list()
tested  = list()

for a in [1] + list(primerange(2, N1_MAX)):
    for b in [1] + list(primerange(2, N2_MAX)):
        for c in primerange(2, N3_MAX):
            factors = shortlist([a, b, c])

            if factors in tested:
                continue

            tested.append(factors)

            n = a * b * c

            print(f"--- TESTING {n} = {factors} ---")

            if (2**n + 1) % n != 0:
                print(f"KO.")

            elif factors not in winners:
                winners.append(factors)

print("End.")

print(f'WINNERS: {sorted(list(winners))}')
