N_MAX      = 10**6
POWER_OF_3 = 2

from common import *


WHAT = lastjson(f"{Path(__file__).stem}-{POWER_OF_3}")

lastdatatested = lastdata(WHAT)

if lastdatatested is None:
    ALL_N_MIN = [
        5,
        lambda x: x,
        lambda x: x,
    ]

else:
    ALL_N_MIN = [
        lastdatatested[POWER_OF_3],
        lambda x: (
            max(
                x,
                lastdatatested[POWER_OF_3 + 1]
            )
            if x == lastdatatested[POWER_OF_3] else
            x
        ),
        lambda x: (
            max(
                x,
                lastdatatested[POWER_OF_3 + 2]
            )
            if x == lastdatatested[POWER_OF_3 + 1] else
            x
        ),
    ]


print(
    "",
    "******************",
    "** TEST - START **",
    "******************",
    "",
    sep = "\n"

)


i, imax = 0, 10

for a in primerange(ALL_N_MIN[0], N_MAX):
    for b in primerange(ALL_N_MIN[1](a), N_MAX):
        for c in primerange(ALL_N_MIN[2](b), N_MAX):
            print(f"---\n{a = }\n{b = }\n{c = }")

            i += 1
            if i == imax:
                exit()

            continue

            testnovak(
                what    = WHAT,
                factors = [3]*POWER_OF_3 + [a, b, c]
            )


print(
    "",
    "****************",
    "** TEST - END **",
    "****************",
    "",
    sep = "\n"
)