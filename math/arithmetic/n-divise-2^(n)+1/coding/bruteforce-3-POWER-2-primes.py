N_MAX      = 2*10**5
POWER_OF_3 = 6

from common import *


WHAT = lastjson(f"{Path(__file__).stem}-{POWER_OF_3}")

lastdatatested = lastdata(WHAT)

if lastdatatested is None:
    ALL_N_MIN = [
        5,
        lambda x: x,
    ]

else:
    ALL_N_MIN = [
        lastdatatested[POWER_OF_3],
        lambda x: (
            max(
                x,
                lastdatatested[POWER_OF_3 + 1] + 1
            )
            if x == lastdatatested[POWER_OF_3] else
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
        testnovak(
            what    = WHAT,
            factors = [3]*POWER_OF_3 + [a, b]
        )


print(
    "",
    "****************",
    "** TEST - END **",
    "****************",
    "",
    sep = "\n"
)
