n = 0

soltrouvee = False

while(not soltrouvee):
    n += 1

    for m in range(1, n + 2):
        p = n + 2 - m

        if p**2 + n**2 == (n + 1)**2 \
        and  m**2 + n**2 == (n + 3)**2:
            soltrouvee = True
            break

print(n)
