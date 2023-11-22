n = 0

soltrouvee = False

while(not soltrouvee):
    n += 1

    for m in range(1, n + 2):
        p = n + 2 - m

        a = n + 1
        b = n + 2
        c = n + 3


        if 4*n**2*b**2 == (a + b + c)*(-a + b + c)*(a - b + c)*(a + b - c):
            soltrouvee = True
            break

print(n)
