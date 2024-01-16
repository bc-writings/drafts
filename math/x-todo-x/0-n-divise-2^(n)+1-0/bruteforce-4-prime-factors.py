ALL_N_RANGE = [
   (3, 4),
   (3, 4),
   (8*10**2 + 62, 10**3),
   (5*10**2, 10**4),
]


from pathlib import Path

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

n_found = []


for a in primerange(*ALL_N_RANGE[0]):
    for b in primerange(
        max(a, ALL_N_RANGE[1][0]),
        ALL_N_RANGE[1][1]
    ):
        for c in primerange(
            max(b, ALL_N_RANGE[2][0]),
            ALL_N_RANGE[2][1]
        ):
            for d in primerange(
                max(c, ALL_N_RANGE[3][0]),
                ALL_N_RANGE[3][1]
            ):

                factors = shortlist([a, b, c, d])

                if skiptest(*factors):
                    continue

                print(f"--- {factors} ---")
                print("TESTING...")

                n = a * b * c * d

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
