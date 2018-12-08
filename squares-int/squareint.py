n = 19

results = []
print(n)

while n not in results:
    results.append(n)
    n = sum(int(d)**2 for d in str(n))
    print(n)

print()
print("Période :")
print(results[results.index(n):])
