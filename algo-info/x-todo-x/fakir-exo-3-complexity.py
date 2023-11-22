# Source: 

import numpy as np
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D

DIM_MAX = 13


# ---------------------------------- #
# -- DECORATOR FOR THE COMPLEXITY -- #
# ---------------------------------- #

NB_CALL = 0

def call_reset():
    global NB_CALL

    NB_CALL = 0

def call_count(func):
    def wrapper(*args, **kwargs):
        global NB_CALL

        NB_CALL += 1

        return func(*args, **kwargs)

    return wrapper


# ------------ #
# -- OUTILS -- #
# ------------ #

def hauteur(planche):
    return len(planche)


def largeur(planche):
    return len(planche[0])


def gauche_ok(j):
    return j > 0


def droite_ok(j, larg):
    return j < larg - 1


# ---------- #
# -- EX.3 -- #
# ---------- #

@call_count
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


# ------------------------ #
# -- CALC. COMPLEXITIES -- #
# ------------------------ #

zdata = [
    [0 for _ in range(0, DIM_MAX)]
    for _ in range(0, DIM_MAX)
]

for h in range(1, DIM_MAX):
    for l in range(1, DIM_MAX):                
        planche_test = [
            [0 for _ in range(l)]
            for _ in range(h)
        ]

        call_reset()

        for j in range(largeur(planche_test)):
            brulures_rec_1(planche_test, 0, j)

        zdata[h][l] = NB_CALL


# -------------------------------- #
# -- VISUALIZE THE COMPLEXITIES -- #
# -------------------------------- #

Z = np.asarray(zdata)

X, Y = np.meshgrid(
    np.arange(Z.shape[0]), 
    np.arange(Z.shape[1])
)

fig  = plt.figure()
ax   = fig.add_subplot(111, projection='3d')
surf = ax.plot_surface(X, Y, Z, cmap=plt.cm.coolwarm)

fig.colorbar(surf)

ax.set_xlabel('X (cols)')
ax.set_ylabel('Y (rows)')
ax.set_zlabel('Z (values)')

plt.show()
