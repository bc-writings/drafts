from copy import deepcopy

DEBUG = False
DEBUG = True


# ------------- #
# -- PLANCHE -- #
# ------------- #

PLANCHE = [
    [0, 1, 4, 5, 2, 1, 2],
    [3, 2, 3, 1, 2, 4, 0],
    [3, 5, 2, 3, 6, 2, 4],
    [3, 7, 1, 2, 5, 8, 5]
]


# ------------ #
# -- OUTILS -- #
# ------------ #

def hauteur(planche):
    return len(planche)


def largeur(planche):
    return len(planche[0])


def verif(planche, chemin):
    haut, larg = hauteur(planche), largeur(planche)

    if (
        len(chemin) != haut
        or
        any(
            x < 0 or x >= larg
            for x in chemin
        )
    ):
        return False

    for posavt, elt in enumerate(chemin[1:]):
        if abs(elt - chemin[posavt]) > 1:
            return False 

    return True


def brulure(planche, chemin_ok):
    return sum([
        planche[i][j]
        for i, j in enumerate(chemin_ok)
    ])


def gauche_ok(j):
    return j > 0


def droite_ok(j, larg):
    return j < larg - 1


# ---------- #
# -- EX.3 -- #
# ---------- #

def brulures_rec_1(planche, i, j):
    haut, larg = hauteur(planche), largeur(planche)

    if i == haut - 1:
        return planche[i][j]

# Dessous toujours ok !
    i_sous, j_sous = i + 1, j
    score          = brulures_rec_1(planche, i_sous, j_sous)

# Gauche ? Droite ?
    for delta_j, test in [
        (-1, gauche_ok),
        (1 , lambda j : droite_ok(j, larg)),
    ]:
        if test(j):
            scoretest = brulures_rec_1(planche, i_sous, j + delta_j)

            if scoretest < score:
                score = scoretest

# C'est fini !
    return score + planche[i][j]

    
def brulures_mini_1(planche):
    return min(
        brulures_rec_1(planche, 0, j)
        for j in range(largeur(planche))
    )

    
# ---------- #
# -- EX.4 -- #
# ---------- #

def brulures_rec_2(planche, i, j):
    haut, larg = hauteur(planche), largeur(planche)

    if i == haut - 1:
        return planche[i][j], [j]

# Dessous toujours ok !
    i_sous, j_sous   = i + 1, j
    score, cols_suiv = brulures_rec_2(planche, i_sous, j_sous)

# Gauche ? Droite ?
    for delta_j, test in [
        (-1, gauche_ok),
        (1 , lambda j : droite_ok(j, larg)),
    ]:
        if test(j):
            scoretest, colstest = brulures_rec_2(planche, i_sous, j + delta_j)

            if scoretest < score:
                score     = scoretest
                j_sous    = j + delta_j
                cols_suiv = colstest

# C'est fini !
    score += planche[i][j]
    cols   = [j] + cols_suiv

    return score, cols


def brulures_mini_2(planche):
    miniscore, minicols = brulures_rec_2(planche, 0, 0)
    
    for j in range(largeur(planche)):
        score, cols = brulures_rec_2(planche, 0, j)
        
        if score < miniscore:
            miniscore, minicols = score, cols

    return miniscore, minicols


# ---------- #
# -- EX.6 -- #
# ---------- #

SCORES_COLS = {}

def brulures_rec_3(planche, i, j):
    haut, larg = hauteur(planche), largeur(planche)

    if (i, j) in SCORES_COLS:
        return SCORES_COLS[(i, j)]

    if i == haut - 1:
        SCORES_COLS[(i, j)] = (planche[i][j], [j])
        
        return SCORES_COLS[(i, j)]

# Dessous toujours ok !
    i_sous, j_sous   = i + 1, j
    score, cols_suiv = brulures_rec_3(planche, i_sous, j_sous)

# Gauche ? Droite ?
    for delta_j, test in [
        (-1, gauche_ok),
        (1 , lambda j : droite_ok(j, larg)),
    ]:
        if test(j):
            scoretest, colstest = brulures_rec_3(planche, i_sous, j + delta_j)

            if scoretest < score:
                score     = scoretest
                j_sous    = j + delta_j
                cols_suiv = colstest

# C'est fini !
    SCORES_COLS[(i, j)] = (
        score + planche[i][j],
        [j] + cols_suiv
    )

    return SCORES_COLS[(i, j)]


def brulures_mini_3(planche):
    miniscore, minicols = brulures_rec_3(planche, 0, 0)
    
    for j in range(largeur(planche)):
        score, cols = brulures_rec_3(planche, 0, j)
        
        if score < miniscore:
            miniscore, minicols = score, cols

    return miniscore, minicols


# ---------- #
# -- EX.7 -- #
# ---------- #

def brulures_mini_4(planche):
    haut, larg = hauteur(planche), largeur(planche)
    
    brulures = deepcopy(planche) # Pour ne pas modifier la planche !

    for i in range(1, haut):
        for j in range(larg):
# Dessus toujours ok !
            i_sur, j_sur = i - 1, j
            score        = brulures[i_sur][j_sur]

# Gauche ? Droite ?
            for delta_j, test in [
                (-1, gauche_ok),
                (1 , lambda j : droite_ok(j, larg)),
            ]:
                if test(j):
                    j_sur     = j + delta_j
                    scoretest = brulures[i_sur][j_sur]

                    if scoretest < score:
                        score = scoretest

# Mise à jour.
            brulures[i][j] = score + planche[i][j]

# Minimum en bas ?
    return min(
        brulures[i][j]
        for j in range(larg)
    )


# ---------- #
# -- EX.8 -- #
# ---------- #

def brulures_mini_5(planche):
    haut, larg = hauteur(planche), largeur(planche)

# On stocke la valeur et le déplacement relatif à suivre pour se  
# brûler le moins possible.
    brulures = [
        [
            [val, 0]
            for val in ligne
        ]
        for ligne in planche
    ]

    for i in range(1, haut):
        for j in range(larg):
# Dessus toujours ok !
            i_sur, j_sur = i - 1, j
            delta_j_sur  = 0
            score        = brulures[i_sur][j_sur][0]

# Gauche ? Droite ?
            for delta_j, test in [
                (-1, gauche_ok),
                (1 , lambda j : droite_ok(j, larg)),
            ]:
                if test(j):
                    j_sur     = j + delta_j
                    scoretest = brulures[i_sur][j_sur][0]

                    if scoretest < score:
                        score       = scoretest
                        delta_j_sur = - delta_j

# Mise à jour.
            brulures[i][j][0]         = score + planche[i][j]
            brulures[i_sur][j_sur][1] = delta_j_sur

# Minimum en bas ?
    jmin      = 0
    miniscore = brulures[i][0][0]

    for j in range(1, larg):
        score = brulures[i][j][0]

        if score < miniscore:
            jmin      = j
            miniscore = score

# Calcul du chemin grâce aux déplacements relatifs.
    chemin = [jmin]

    for i in range(haut - 1, 0, -1):
        jmin  += brulures[i][jmin][1]
        chemin = [jmin] + chemin

    return (miniscore, chemin)



# ----------- #
# -- TESTS -- #
# ----------- #

if DEBUG:
    PLANCHE_TEST = [
        [0, 1, 4, 5, 2, 1, 2],
        [3, 2, 3, 1, 2, 4, 0],
        [3, 5, 2, 3, 6, 2, 4],
        [3, 7, 1, 2, 5, 8, 5]
    ]

    def untest(attendu, fonc, *args):
        if attendu != fonc(PLANCHE_TEST, *args):
            print(
                f"TEST RÂTÉ SUR << {fonc.__name__} >> avec "
                "le(s) argument(s) suivant(s)."
            )
            
            for i, arg in enumerate(args, 1):
                print(f"ARG.{i} = {arg}")
            
            exit()


    for chemin, attendu in [
        ([1]             , False),
        ([1, 2, 2, 1]    , True ),
        ([1, 2, 3, 4]    , True ),
        ([1, 3, 22222, 1], False),
        ([1, 3, 2, 1]    , False),
        ([5, 6, 7, 8]    , False),
    ]:
        untest(attendu, verif, chemin)


    for chemin, attendu in [
        ([0, 1, 2, 2], 5),
    ]:
        untest(attendu, brulure, chemin)


    for i, j, attendu in [
        (3, 1, 7),
        (1, 3, 4),
    ]:
        untest(attendu, brulures_rec_1, i, j)


    for fonc in [
        brulures_mini_1,
        brulures_mini_4,
    ]:
        if 5 != fonc(PLANCHE_TEST):
            print(f"TEST RÂTÉ SUR << {fonc.__name__} >> .")
            exit()


    for fonc in [
        brulures_mini_2,
        brulures_mini_3,
        brulures_mini_5,
    ]:
        if (5, [0, 1, 2, 2]) != fonc(PLANCHE_TEST):
            print(f"TEST RÂTÉ SUR << {fonc.__name__} >> .")
            exit()

    
    print("")
    print("TESTS FINIS !")
    print("")

    exit()


# -------------- #
# -- SOLUTION -- #
# -------------- #
