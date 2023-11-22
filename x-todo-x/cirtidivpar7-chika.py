#Critere de Chika



def est_divisible_par7(nbre):

    """

    Cette fonction applique le critere de Chika a nbre, qui est un

    entier qui a entre 2 et 4 chiffres.

    Par exemple pour nbre = 8722. On separe (872,2)

    872+5*2=882. On sépare (88,2)

    On recommance pour 882 en appelant est_divisible_par7_3ch

   88+5*2=98

    Or 98 est divisible par 7

    Elle retourne True si le critere de Chika prouve que le nombre

    est divisible par 7, et False sinon.

    Precondition : nbre est un entier

    Postcondition : la fonction retourne un booleen

    """

    resultat=nbre

    while resultat>58:
        unites=resultat%10 #reste de la division par 10

        dizaines=resultat//10 #division entière par 10 donne le quotient entier

        resultat=dizaines+5*unites

    if resultat%7==0:

        return True

    else:

        return False



def verifie(liste):

    """

    liste est une liste d'entiers.

    Cette fonction retourne le tuple

    (nombre d'entiers divisibles par 7 de la liste suivant le critere de Chika,

    nombre d'entiers non divisibles par 7 de la liste suivant le critere de Chika)

    verifie([7*143,7*143+1,7*143+2,7*143+3,7*144])retourne (2,3)

    Precondition : liste est du type liste

    Postcondition : la fonction retourne un tuple



    """

    cpt_divisible=0

    cpt_non_divisible=0

    for element in liste:

        if est_divisible_par7(element)==True:

            cpt_divisible=cpt_divisible+1

        else:

            cpt_non_divisible=cpt_non_divisible+1

    return (cpt_divisible,cpt_non_divisible)



liste_test=[i*7 for i in range(2,1429)]# contient 1429-2=1427 nombres
non_liste_test=[k for k in range(10,10000) if k%7!=0] # contient 9990-1427=8563 nombres

# Autre methode possible :
# non_liste_test=[k for k in range(10,10000) if k not in liste_test]





# Tests de la  fonctions est_divisible_par7(nbre)
assert est_divisible_par7(14)==True
assert est_divisible_par7(50)==False
assert est_divisible_par7(630)==True
assert est_divisible_par7(631)==False
assert est_divisible_par7(5957)==True
assert est_divisible_par7(5960)==False





# Verification du critere de Chika pour tous les entiers de 2 à 4  chiffres :

assert verifie(liste_test)==(1427,0)

assert verifie(non_liste_test)==(0,8563)





print("Toutes les assertions sont vérifiées, le Critere de Chika est verifie \ pour tous les entiers entre 10 et 9999. ")
