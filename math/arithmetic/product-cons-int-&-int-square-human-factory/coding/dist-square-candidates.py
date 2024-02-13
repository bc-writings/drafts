from math import sqrt, floor

def sol(diff):
    solfound = []

    for i in range(1, (diff + 1) // 2 + 1):
        tested = i**2 - diff

        if tested < 0:
            continue

        tested = floor(sqrt(i**2 - diff))

        if tested == 0:
            continue

        if tested**2 == i**2 - diff:
            solfound.append((i, tested))

    return solfound


for c in sol(9):
    print(c)

exit()

for nbsol in range(20):
    print()
    print(f"{nbsol = }")

    for d in range(1, 21):
        if len(sol(d)) == nbsol:
            print(d, end=", ")

print()
