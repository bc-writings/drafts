N1_MAX = 10**6
N2_MAX = 10**6
N3_MAX = 10**6

# N1_MAX = 10**2
# N2_MAX = 10**2
# N3_MAX = 10**4


from pathlib import Path

from sympy import primerange


THIS_DIR     = Path(__file__).parent
RESULTS_FILE = THIS_DIR / "results.txt"
TESTED_FILE  = THIS_DIR / "tested.txt"

def shortlist(mylist):
    newlist = []

    for p in mylist:
        if p == 1:
            continue

        newlist.append(p)

    newlist.sort()

    return newlist


print("Start.")

winners = list()
tested  = list()

RESULTS_FILE.touch()
TESTED_FILE.touch()

if RESULTS_FILE.is_file():
    lasttested = TESTED_FILE.read_text()

    for found in lasttested.split('\n'):
        if found:
            tested.append(eval(found))


for a in [1] + list(primerange(2, N1_MAX)):
    for b in [1] + list(primerange(2, N2_MAX)):
        for c in primerange(2, N3_MAX):
            factors = shortlist([a, b, c])

            print(f"--- {factors} ---")

            if factors in tested:
                continue

            tested.append(factors)

            with TESTED_FILE.open(
                mode = "a",
            ) as f:
                f.write(f"{factors}\n")

            n = a * b * c

            print("TESTING...")

            if (2**n + 1) % n != 0:
                print(f"KO.")

            elif factors not in winners:
                winners.append(factors)

                with RESULTS_FILE.open(
                    mode = "a",
                ) as f:
                    f.write(f"{factors}\n")


print("End.")
