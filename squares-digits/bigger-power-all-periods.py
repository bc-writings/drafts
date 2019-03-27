from math import floor, log

power = 5

nmax = 10**(3 + floor(log(9**power / log(10)) / log(10))) - 1

periodsfound     = []
periodsfoundsets = []

print(f"p = {power}")

for n in range(nmax + 1):
    results = []

    while n not in results:
        results.append(n)
        n = sum(int(d)**power for d in str(n))

    period    = results[results.index(n):]
    periodset = set(period)

    if periodset not in periodsfoundsets \
    and period not in periodsfound:
        minnb  = min(period)
        cursor = period.index(minnb)

        period = period[cursor:] + period[:cursor]

        periodsfound.append(period)
        periodsfoundsets.append(periodset)

periodsfound.sort(key = lambda x: x[0])

for oneperiod in periodsfound:
    print(oneperiod)
