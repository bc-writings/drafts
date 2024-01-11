nmax = 25*4*9

successors = set()
squares    = set()

for n in range(nmax):
    squares.add(n**2 % nmax)
    successors.add(n*(n+1)*(n+2)*(n+3)*(n+4) % nmax)


print(successors)

for c in squares.intersection(successors):
    print(c)
