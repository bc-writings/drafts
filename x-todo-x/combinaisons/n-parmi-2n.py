from math import floor

# Legendre's formula
def val2adic_facto(n):
    valu = 0
    pow2 = 2

    while(n >= pow2):
        valu += floor(n / pow2)
        pow2 *= 2

    return valu


for n in range(1, 10**5):
    n_bin  = bin(n)
    n_bin  = n_bin.replace("0b", "")
    nb_one = len(n_bin.replace("0", ""))

    val2adic_comb  = val2adic_facto(2*n)
    val2adic_comb -= 2*val2adic_facto(n)

    if val2adic_comb != nb_one:
        print('Not a miracle!')

print("That's all folks!")
