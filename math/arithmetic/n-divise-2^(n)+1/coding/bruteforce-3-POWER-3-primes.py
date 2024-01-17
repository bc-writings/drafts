N_MAX      = 10**5
POWER_OF_3 = 2

from common import *


WHAT = lastjson(f"{Path(__file__).stem}-{POWER_OF_3}")

lastdatatested = lastdata(WHAT)

ALL_N_MIN = [5]

if lastdatatested is None:
    ALL_N_MIN += [
        lambda x: x,
        lambda x: x
    ]

else:
    for i in range(POWER_OF_3 + 1, len(lastdatatested) + 1):
        ALL_N_MIN.append(
            lambda x: max(x, lastdatatested[-i])
        )


print(
    "",
    "******************",
    "** TEST - START **",
    "******************",
    "",
    sep = "\n"

)

for a in primerange(4, N_MAX):
    for b in primerange(ALL_N_MIN[1](a), N_MAX):
        for c in primerange(ALL_N_MIN[2](b), N_MAX):
            testnavak(
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
