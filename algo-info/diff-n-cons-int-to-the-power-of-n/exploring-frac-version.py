from math import factorial
from random import randint

from sympy import S

NMAX      = 20
POWER_MAX = 6
NB_TESTS  = 10**3

print("TEST - START")

kmax = 10**POWER_MAX

for _ in range(NB_TESTS):
    n     = randint(1, NMAX)
    start = S(randint(0, kmax)) / S(randint(1, kmax))

    L = [(start + i)**n for i in range(n + 1)]

    while len(L) != 1:
        newL = []

        for i, elt in enumerate(L[:-1]):
            newL.append(L[i+1] - elt)

        L = newL[:]

    if L[0] != factorial(n):
        print(f"    * Test failed with n = {n}")
        exit()

print("TEST - END")
