from math import factorial
from random import randint

from sympy import poly
from sympy.abc import x

NMAX     = 20
DMAX     = 10
NB_TESTS = 10**4

print("TEST - START")

for _ in range(NB_TESTS):
    n = randint(1, NMAX)
    d = randint(1, DMAX)

    L = [poly((x + i*d)**n) for i in range(n + 1)]

    while len(L) != 1:
        newL = []

        for i, elt in enumerate(L[:-1]):
            newL.append(L[i+1] - elt)

        L = newL[:]

    result = L[0]
    result = result.expand()

    if result.degree() != 0 \
    or L[0] != d**n*factorial(n):
        print(f"    * Test failed with n = {n}")
        exit()

print("TEST - END")
