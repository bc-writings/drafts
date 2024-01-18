N_MAX      = 10**6
POWER_OF_3 = 2

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
        lambda x:  max(
            x,
            lastdatatested[POWER_OF_3 + 1]
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

for a in primerange(5, N_MAX):
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
