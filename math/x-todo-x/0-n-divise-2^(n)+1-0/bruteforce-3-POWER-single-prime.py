N_MAX = 10**5
POWER = 6

from functools import reduce
from operator  import mul
from pathlib   import Path

from sympy import primerange


THIS_DIR     = Path(__file__).parent
RESULTS_FILE = THIS_DIR / "results.txt"
TESTED_DIR   = THIS_DIR / "tested"

if not TESTED_DIR.is_dir():
    TESTED_DIR.mkdir()


def shortlist(factors):
    newfactors = []

    for f in factors:
        if f == 1:
            continue

        newfactors.append(f)

    return newfactors


def skiptest(*factors):
    testedfile = TESTED_DIR

    for f in factors[:-1]:
        testedfile /= str(f)

    testedfile /= f"{factors[-1]}.tested.txt"

    return testedfile.is_file()


def memotest(*factors):
    testedfile = TESTED_DIR

    for f in factors[:-1]:
        testedfile /= str(f)

        if not testedfile.is_dir():
            testedfile.mkdir()

    testedfile /= f"{factors[-1]}.tested.txt"

    testedfile.touch()


print(
    "",
    "******************",
    "** TEST - START **",
    "******************",
    "",
    sep = "\n"
)

power_3 = 3**POWER

for a in primerange(87212, N_MAX):
    factors = shortlist([3]*POWER + [a])

    if skiptest(*factors):
        continue

    print(f"--- {factors} ---")
    print("TESTING...")

    n = power_3 * a

    if (2**n + 1) % n != 0:
        print(f"KO.")

    else:
        with RESULTS_FILE.open(
            mode = "a",
        ) as f:
            f.write(f"{factors}\n")

    memotest(*factors)


print(
    "",
    "****************",
    "** TEST - END **",
    "****************",
    "",
    sep = "\n"
)
