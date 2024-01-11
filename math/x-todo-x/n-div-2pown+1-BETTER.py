from sympy import sieve

nmax = 10_000

sieve.extend(nmax)

nbprimes = len(sieve._list) + 1

n = 2**9

for i in range(3, nbprimes):
    p = sieve[i]

    if (n ** p + 1) % p == 0:
        print(f"{p = }")

        n = n ** p

print('FINI')
