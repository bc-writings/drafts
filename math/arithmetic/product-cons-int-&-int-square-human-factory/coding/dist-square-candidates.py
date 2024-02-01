DIST = 12


from math import sqrt, floor

for i in range(1, (DIST + 1) // 2 + 1):
    tested = i**2 - DIST

    if tested < 0:
        continue

    tested = sqrt(i**2 - DIST)

    if tested == floor(tested):
        print(f"({i}, {floor(tested)})")
