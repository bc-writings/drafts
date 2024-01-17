# 2^n efficace via modulo dès que c'est utile: cf log de ??


from functools import reduce
from operator  import mul

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
    with what.open(
        mode = "w",
    ) as f:
        f.write(f"{factors}\n")


def testnavak(what, factors):
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
