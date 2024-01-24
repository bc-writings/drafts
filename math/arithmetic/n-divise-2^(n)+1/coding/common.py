from functools import reduce
from operator  import mul

from math import log, floor

from json import load
from pathlib   import Path

from sympy import primerange


THIS_DIR     = Path(__file__).parent
RESULTS_FILE = THIS_DIR / "results.txt"
LAST_DIR     = THIS_DIR / "last"

if not LAST_DIR.is_dir():
    LAST_DIR.mkdir()


def lastjson(what):
    return (LAST_DIR / f"{what}.json")


def lastdata(what):
    if not what.is_file():
        return None

    with what.open(
        mode = "r",
    ) as f:
        data = load(f)

    return data


def memotest(what, factors):
    # DEBUG
    # input("OK?")

    with what.open(
        mode = "w",
    ) as f:
        f.write(f"{factors}\n")


def isnovak(n):
# (2**n + 1) % n == 0  <==>  2**n % n == n - 1
# and
# 2**k > n  <==>  k > log(n) / log(2)
    kstep  = floor(log(n) / log(2)) + 1
    nbstep = n // kstep
    power  = 1
    p_2_k  = 2**kstep

    for _ in range(nbstep):
        power *= p_2_k
        power  = power % n

    power *= 2**(n % kstep)
    power  = power % n

    return power == n-1

# def isnovak_OLD(n):
#     return (2**n + 1) % n == 0


# def testnovak(what, factors):
#     n =  reduce(mul, factors, 1)

#     print(n)

#     if isnovak(n) != isnovak_OLD(n):
#         print("BUG")
#         exit()

def testnovak(what, factors):
    print(f"--- {factors} ---")
    print("TESTING...")

    n =  reduce(mul, factors, 1)

    if isnovak(n):
        with RESULTS_FILE.open(
            mode = "a",
        ) as f:
            f.write(f"{factors}\n")

    else:
        print(f"KO.")

    memotest(what, factors)
