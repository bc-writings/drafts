N_MAX      = 10**6
POWER_OF_3 = 2

from common import *

WHAT = lastjson(f"{Path(__file__).stem}-{POWER_OF_3}")

lastdatatested = lastdata(WHAT)

if lastdatatested is None:
    N_MIN = 5

else:
    N_MIN = max(5, lastdatatested[-1])


print(
    "",
    "******************",
    "** TEST - START **",
    "******************",
    "",
    sep = "\n"

)

for a in primerange(N_MIN, N_MAX):
    testnavak(
        what    = WHAT,
        factors = [3]*POWER_OF_3 + [a]
    )


print(
    "",
    "****************",
    "** TEST - END **",
    "****************",
    "",
    sep = "\n"
)
