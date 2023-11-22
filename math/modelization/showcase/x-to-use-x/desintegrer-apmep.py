from random import randint

NB_SIMULATIONS  = 10**6
nb_max_essais   = 10**3
probas_cumulees = 0

for i in range(NB_SIMULATIONS):
    proba_desintegration = 1

    for essai_no in range(nb_max_essais):
        de = randint(1, 6)

        if de == 1:
            proba_desintegration = proba_desintegration * 1/ 6
            probas_cumulees      = probas_cumulees + proba_desintegration

        else:
            proba_desintegration = proba_desintegration * 5/ 6

proba_moy = probas_cumulees / NB_SIMULATIONS

print(proba_moy, "=?=", 1 / 6)
