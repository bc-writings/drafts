def somme_carres_chiffres(n):
    total = 0

    while(n != 0):
        chiffre_unite  = n % 10
        nbre_centaines = n // 10

        total = total + chiffre_unite**2

        n = nbre_centaines

    return total


def tester(u):
    print("Test pour", u)

    while(u != 1 and u!= 4):
        u = somme_carres_chiffres(u)

    print("Test fini.")


for i in range(1, 100):
    tester(i)
