from math import factorial
from random import randint

NMAX      = 20
POWER_MAX = 6
NB_TESTS  = 10**6

print("TEST - START")

kmax = 10**POWER_MAX

for _ in range(NB_TESTS):
    n     = randint(1, NMAX)
    start = randint(0, kmax)

    L = [i**n for i in range(start, start + n + 1)]

    while len(L) != 1:
        newL = []

        for i, elt in enumerate(L[:-1]):
            newL.append(L[i+1] - elt)

        L = newL[:]

    if L[0] != factorial(n):
        print(f"    * Test failed with n = {n}")
        exit()

print("TEST - END")
