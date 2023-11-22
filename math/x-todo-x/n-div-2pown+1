from sympy import sieve

nmax = 5000

sieve.extend(nmax)

nbprimes = len(sieve._list) + 1


for i in range(1, nbprimes):
    p = sieve[i]

    if (2**p + 1) % p == 0:
        print(f"{p = }")


for i in range(1, nbprimes):
    for j in range(i+1, nbprimes):
        pi = sieve[i]
        pj = sieve[j]

        for ope in [
            "pi * pj",
            "pi**2 * pj",
            "pi * pj**2",
        ]:
            n  = eval(ope)

            if (2**n + 1) % n == 0:
                print(f"{pi = } , {pj = }  [ {ope} ]")


for i in range(1, nbprimes):
    for j in range(i+1, nbprimes):
        for k in range(j+1, nbprimes):
            pi = sieve[i]
            pj = sieve[j]
            pk = sieve[k]

            for ope in [
                "pi * pj * pk",
                "pi**2 * pj * pk",
                "pi * pj**2 * pk",
                "pi * pj * pk**2",
            ]:
                n  = eval(ope)

                if (2**n + 1) % n == 0:
                    print(f"{pi = } , {pj = } , {pk = }  [ {ope} ]")


print('FINI')
