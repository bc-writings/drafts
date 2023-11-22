#!/usr/bin/env python3

from laby_bis import *


# ----------------- #
# -- OUR CHOICES -- #
# ----------------- #

HEIGHT, WIDTH = 10, 15

# 0 --> Création par la GUI
# 1 --> Création forward/backward
# 2 --> Création union-find
NB_CREA = 1

# Pour voir du pas à pas : c'est lent si trop de casse !
# TODO: optimiser via montre cacher au lie de tout 
#       redessiner bien entendu !
#       +
#       pour solution colorer les cases visitées 
#
# STEP_BY_STEP_CREA sans effet si NB_CREA = 0.
STEP_BY_STEP_CREA = True
STEP_BY_STEP_SOL  = True

TIME_SLEEP = 10**-6


# ------------- #
# -- SOLVING -- #
# ------------- #

def explore(lab, stepbystep = False):
    start     = (0, 0)
    end       = (lab.height - 1, lab.width - 1)
    pathfound = Pile()
    dejavu    = {
        (i, j) : False
        for i in range(lab.height)
        for j in range(lab.width)
    }

# On part du départ. Dingue ! Non ?
    pathfound.push(start)
    dejavu[start] = True
    
# On avance tant que l'on peut puis une fois bloqué.e, on regarde
# si l'on est arrivé.e.
    while (cell := pathfound.head) != end:
        i, j = cell[0], cell[1]

# Cellules voisines à visiter
        case = lab.tab[i][j]

        i_next = i
        j_next = j
        
        for card_dir, (_, d_i, d_j, _) in lab.card_dir_configs.items():
            if (
                case.state(card_dir) 
                and
                not dejavu[(i + d_i, j + d_j)]
            ):
                i_next += d_i
                j_next += d_j
                break

        dejavu[(i, j)] = True

# On est au bout de ce monde sans être à la fin...
        if (i_next, j_next) == (i, j):
            pathfound.pop()

        else:
            pathfound.push((i_next, j_next))

        if stepbystep:
            lab.show(sol = pathfound.clone())

# Travail fini.
    return pathfound


# --------------- #
# -- CREATE #1 -- #
# --------------- #

def create1(lab, stepbystep = False):
    start        = (0, 0)
    cellsvisited = Pile()
    dejavu       = {
        (i, j) : False
        for i in range(lab.height)
        for j in range(lab.width)
    }

# Allons-y Alonzo...
    cellsvisited.push(start)

    while not cellsvisited.empty():
        (i, j)         = cellsvisited.head
        dejavu[(i, j)] = True
        
        i_next = i
        j_next = j

# Rien à visiter autour.
        if not any(
            (
                validate(i, j) 
                and
                not dejavu[(i + d_i, j + d_j)]
            )
            for _, d_i, d_j, validate in lab.card_dir_configs.values()
        ):
            cellsvisited.pop()
            continue

# Quelque chose à visiter autour.
        nowallopened = True
        
        while nowallopened:
            card_dir = choice(CARD_DIRS)

            oppo_card_dir, d_i, d_j, validate = lab.card_dir_configs[card_dir]
            
            if validate(i, j) and not dejavu[(i + d_i, j + d_j)]:
                i_next += d_i
                j_next += d_j

                lab.tab[i][j]          .open(card_dir)
                lab.tab[i_next][j_next].open(oppo_card_dir)

                if stepbystep:
                    lab.show()

                nowallopened = False

# Une nouvelle cellule à explorer...
        cellsvisited.push((i_next, j_next))


# --------------- #
# -- CREATE #2 -- #
# --------------- #

def create2(lab, stepbystep = False):
    tovisit = [
        (i, j)
        for i in range(lab.height)
        for j in range(lab.width)
    ]

    uf = UnionFind(tovisit[:])

    while(tovisit):
        pos       = randint(0, len(tovisit) - 1)
        (i, j)    = tovisit[pos]
        cell_repr = uf.find((i, j))

# Aucune cellule voisine dans une autre partition.
        if not any(
            (
                validate(i, j) 
                and
                cell_repr != uf.find((i + d_i, j + d_j))
            )
            for _, d_i, d_j, validate in lab.card_dir_configs.values()
        ):
            tovisit.pop(pos)
            continue

# Au moins une cellule voisine dans une autre partition.
        nowallopened = True
        
        while nowallopened:
            card_dir = choice(CARD_DIRS)

            oppo_card_dir, d_i, d_j, validate = lab.card_dir_configs[card_dir]

            i_near, j_near = i + d_i, j + d_j
            
            if validate(i, j) and cell_repr != uf.find((i_near, j_near)):
                lab.tab[i][j]          .open(card_dir)
                lab.tab[i_near][j_near].open(oppo_card_dir)

                if stepbystep:
                    lab.show()

                uf.union((i, j), (i_near, j_near))
                nowallopened = False


# ---------- #
# -- TEST -- #
# ---------- #

if __name__ == "__main__":
    lab = Labyrinthe(HEIGHT, WIDTH, timesleep = TIME_SLEEP)

    if 0 == NB_CREA:
# Création par la GUI
        lab.create()
    
    elif 1 == NB_CREA:
# Création 1
        create1(lab, STEP_BY_STEP_CREA)

# Création 2
    else:
        create2(lab, STEP_BY_STEP_CREA)

# Résolution
    pathfound = explore(lab, STEP_BY_STEP_SOL)

# Affichage
    lab.show(sol = pathfound, keepit = True)
