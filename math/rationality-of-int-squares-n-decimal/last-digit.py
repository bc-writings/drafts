N = 5

lastdigit       = []
lastdigit_for_N = []

for i in range(10):
    square   = (i**2)%10
    N_square = (N*square)%10

    lastdigit.append(square)
    lastdigit_for_N.append(N_square)

common = set(lastdigit).intersection(lastdigit_for_N)

print(f"N = {N}")
print("r possibles :")

for i in range(10):
    if lastdigit[i] in common:
        print(i, end = ", ")

print()
print("s possibles :")

for i in range(10):
    if lastdigit_for_N[i] in common:
        print(i, end = ", ")

print()
