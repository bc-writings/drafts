nmin     = 0
mindepth = float("inf")

for n in range(2, 10**5 + 1):
    nmemo   = n
    results = []

    while n not in results:
        results.append(n)
        n = sum(int(d)**2 for d in str(n))

    depth = len(results)

    if 4 < depth < mindepth:
        mindepth = depth
        nmin     = nmemo

print(f"{nmin} de profondeur {mindepth}.")
