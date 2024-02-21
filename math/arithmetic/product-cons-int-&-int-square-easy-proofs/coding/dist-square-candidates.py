from math import sqrt, floor


# N**2 - M**2 = diff ?
def sol(diff):
    solfound = []

    for N in range(1, (diff + 1) // 2 + 1):
        M_square = N**2 - diff

        if M_square > 0:
            M = floor(sqrt(M_square))

            if M != 0 and M**2 == M_square:
                solfound.append((M, N))

    return solfound


for c in sol(11):
    print(c)

exit()

for nbsol in range(20):
    print()
    print(f"{nbsol = }")

    for d in range(1, 21):
        if len(sol(d)) == nbsol:
            print(d, end=", ")

print()
