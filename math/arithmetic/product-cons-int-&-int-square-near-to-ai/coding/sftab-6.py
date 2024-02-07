K = 11

from common import *


for p in [2, 7]:
    print(f"{K = }  &  {p = }")
    for sftab in build_prime_sftabs(K, p):
        print("".join(str(x) for x in sftab))
