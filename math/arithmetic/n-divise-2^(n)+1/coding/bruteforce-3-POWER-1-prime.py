N_MAX      = 10**6
POWER_OF_3 = 9

from common import *

WHAT = lastjson(f"{Path(__file__).stem}-{POWER_OF_3}")

lastdatatested = lastdata(WHAT)

if lastdatatested is None:
    N_MIN = 5

else:
    N_MIN = max(5, lastdatatested[-1]) + 1


decoplus = "*" * POWER_OF_3

print(
    "",
    "*************************" + decoplus,
    f"** TEST: 3^{POWER_OF_3} x p - START **",
    "*************************" + decoplus,
    "",
    sep = "\n"

)

for a in primerange(N_MIN, N_MAX):
    testnovak(
        what    = WHAT,
        factors = [3]*POWER_OF_3 + [a]
    )


print(
    "",
    "***********************" + decoplus,
    f"** TEST: 3^{POWER_OF_3} x p - END **",
    "***********************" + decoplus,
    "",
    sep = "\n"
)
