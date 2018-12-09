nmax = 999

periodsfound = set()

for n in range(nmax + 1):
    results = []

    while n not in results:
        results.append(n)
        n = sum(int(d)**2 for d in str(n))

    periodsfound.add(
        tuple(results[results.index(n):])
    )

for oneperiod in periodsfound:
    print(oneperiod)
