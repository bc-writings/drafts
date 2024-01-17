# 2^n efficace via modulo dès que c'est utile: cf log de ??


from functools import reduce
from operator  import mul

from json import load
from pathlib   import Path

from sympy import primerange


THIS_DIR     = Path(__file__).parent
RESULTS_FILE = THIS_DIR / "results.txt"
TESTED_DIR   = THIS_DIR / "tested"
LAST_DIR     = THIS_DIR / "last"

for pdir in [
    TESTED_DIR,
    LAST_DIR
]:
    if not pdir.is_dir():
        pdir.mkdir()


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



def factors2path(factors):
    testedfile = TESTED_DIR

    for f in factors[:-1]:
        testedfile /= str(f)

    testedfile /= f"{factors[-1]}.tested.txt"

    return testedfile


def skiptest(factors):
    return factors2path(factors).is_file()


def memotest(what, factors):
    testedfile = factors2path(factors)

    if not testedfile.parent.is_dir():
        testedfile.parent.mkdir(parents = True)

    factors2path(factors).touch()


    with what.open(
        mode = "w",
    ) as f:
        f.write(f"{factors}\n")


def testnavak(what, factors):
    if skiptest(factors):
        return None

    print(f"--- {factors} ---")
    print("TESTING...")

    n =  reduce(mul, factors, 1)

    if (2**n + 1) % n != 0:
        print(f"KO.")

    else:
        with RESULTS_FILE.open(
            mode = "a",
        ) as f:
            f.write(f"{factors}\n")

    memotest(what, factors)
