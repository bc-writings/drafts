from random import randint

n     = randint(10**14, 10**20)
nmemo = n


results = []
print(n)

while n not in results:
    results.append(n)
    n = sum(int(d)**2 for d in str(n))
    print(n)

print()
print(f"{nmemo} a la période suivante :")
print(results[results.index(n):])

print()

before = results[:results.index(n)]

if before:
    print("Avant la 1ère période nous avons :")
    print(before)
else:
    print("On commence directement par la période.")
