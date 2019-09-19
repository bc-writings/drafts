from collections import defaultdict
from math import log
from itertools import permutations

import matplotlib.pyplot as plt


# ---------------------- #
# -- GENERAL SETTINGS -- #
# ---------------------- #


NMAX = 10**7


# ------------------------ #
# -- BUILDING THE DATAS -- #
# ------------------------ #

# Let's see the first infos we have.
#
# 0 --> Period : [0]
#       Before : []
#
# 1 --> Period : [1]
#       Before : []
#
# 2 --> Period : [4, 16, 37, 58, 89, 145, 42, 20]
#       Before : [2]
#
# 3 --> Period : [37, 58, 89, 145, 42, 20, 4, 16]
#       Before : [3, 9, 81, 65, 61]
#
# 4 --> Period : [4, 16, 37, 58, 89, 145, 42, 20]
#       Before : []
#
# 5 --> Period : [89, 145, 42, 20, 4, 16, 37, 58]
#       Before : [5, 25, 29, 85]
#
# ...
#
#
# This shows us that each time one period is found we can build
# infos about all the numbers that are in the period :
#
# 2  --> Period : [4, 16, 37, 58, 89, 145, 42, 20]
# 4  --> Period : [4, 16, 37, 58, 89, 145, 42, 20]
# 16 --> Period : [16, 37, 58, 89, 145, 42, 20, 4]
# 37 --> Period : [37, 58, 89, 145, 42, 20, 4, 16]
# ...
#
#
# Similarly each sequence before the first period gives us
# several infos at a time :
#
# 3  --> Before : [3, 9, 81, 65, 61]
# 9  --> Before : [9, 81, 65, 61]
# 61 --> Before : [61]
# 65 --> Before : [65, 61]
# 81 --> Before : [81, 65, 61]
# ...
#
#
# One last thing that will help us in saving time is that
# for example 123, 132, 213, 231, 312 et 321 will produce
# the same infos.

def addnewinfos(
    n,
    infosfound,
    before,
    beforesize,
    period,
    periodsize
):
# Always to be added...
    infosfound[n] = (beforesize, periodsize)

# Adding extra infos inside the period.
    for x in period:
        if x not in infosfound:
            infosfound = addnewinfos(
                n          = x,
                infosfound = infosfound,
                before     = [], # <--- Just store sizes !
                beforesize = 0,
                period     = [], # <--- Just store sizes !
                periodsize = periodsize
            )

# Adding extra infos inside the "before" sequence".
    if before:
        before = before[1:]

        for cursor, x in enumerate(before):
            newbefore = before[cursor:]

            infosfound = addnewinfos(
                n          = x,
                infosfound = infosfound,
                before     = newbefore,
                beforesize = len(newbefore),
                period     = period,
                periodsize = periodsize
            )


# We have to take care of permutations of the digits...
    if before or period:
        for nrot in permutations(str(n)):
            nrot = int(''.join(nrot))

            infosfound = addnewinfos(
                n          = nrot,
                infosfound = infosfound,
                before     = [], # <--- Just store sizes !
                beforesize = beforesize,
                period     = [], # <--- Just store sizes !
                periodsize = periodsize
            )

# All the job has been done.
    return infosfound


infosfound = {}


for n in range(NMAX + 1):
    nmemo   = n
    results = []
    newone  = True

# Looking for the period...
    while n not in results:
        if n in infosfound:
            before     = results
            beforesize = len(results) + infosfound[n][0]

            period = []  # This indicates to not manage extra
                         # infos about the period because
                         # the job was already done !
            periodsize = infosfound[n][1]

            newone = False
            break

        results.append(n)
        n = sum(int(d)**2 for d in str(n))

    if newone:
        cursor = results.index(n)

        before     = results[:cursor]
        beforesize = len(before)

        period     = results[cursor:]
        periodsize = len(period)

    infosfound = addnewinfos(
        n          = nmemo,
        infosfound = infosfound,
        before     = before,
        beforesize = beforesize,
        period     = period,
        periodsize = periodsize
    )


infosfound = {
    n: infos
    for n, infos in infosfound.items()
    if n <= NMAX
}


# ----------------------- #
# -- PLOTING THE DATAS -- #
# ----------------------- #

befores = []
periods = []

for _, (b, p) in infosfound.items():
    befores.append(b)
    periods.append(p)

for pict, datas, xmax, title in [
    ('befores', befores,
      NMAX/2, 'Taille des suites avant périodicité'),
    ('periods', periods,
      NMAX    , 'Taille des périodes')
]:
    n, bins, patches = plt.hist(x = datas)


    plt.xlabel('Taille')
    plt.ylabel('Effectifs')
    plt.title(f"{title} pour $n \leq {NMAX}$")
    plt.axis([0, max(befores), 0, xmax+10])
    plt.grid(True)
    plt.savefig(f"{pict}.png")
    plt.clf()
