N = 11

def keep(i):
    """
To keep only none multiples of 2 :
    return i % 2 != 0

To keep only none multiples of 5 :
    return i % 5 != 0
    """
    return True

twolastdigits       = []
twolastdigits_for_N = []

for i in range(100):
    square   = (i**2)%100
    N_square = (N*square)%100

    twolastdigits.append(square)
    twolastdigits_for_N.append(N_square)

common = set(twolastdigits).intersection(twolastdigits_for_N)


print(f"N = {N}")
print("r possibles :")

for i in range(100):
    if twolastdigits[i] in common and keep(i):
        print(i, end = ", ")

print()
print("s possibles :")

for i in range(100):
    if twolastdigits_for_N[i] in common and keep(i):
        print(i, end = ", ")

print()
