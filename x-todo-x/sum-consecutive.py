r_max = 1200
i_max = 1200

nb_founds = set()

for r in range(1, r_max):
    for i in range(1, i_max):
        nb_founds.add(
            sum([k for k in range(i, i + r + 1)])
        )

nmax = max(nb_founds)

nb_missing = set(range(1, nmax+1)) - nb_founds
nb_missing = list(nb_missing)
nb_missing.sort()

print(', '.join(str(n) for n in nb_missing[:40]))
