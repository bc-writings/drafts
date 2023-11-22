#!/usr/bin/env python3

from collections import defaultdict


# ------------ #
# -- GRAPHE -- #
# ------------ #

GRAPHE = {
    0 : [1,2,3,4],
    1 : [5, 6],
    2 : [3],
    4 : [9, 8],
    5 : [6],
    7 : [5, 6],
    8 : [9],
    10: [9, 8],
}


# --------------------- #
# -- VERSION INTERNE -- #
# --------------------- #

# indice = n° du dommet
# valeur = ensemble des voisins

def graph_dico_2_liste(graphe_dico):
    max_sommet = -1

    for sommet, voisins in graphe_dico.items():
        max_sommet = max(sommet, *voisins, max_sommet)

    graphe_liste = [set() for _ in range(max_sommet + 1)]

    for sommet, voisins in graphe_dico.items():
        graphe_liste[sommet] |= set(voisins)
        
        for vs in voisins:
            graphe_liste[vs].add(sommet)

    return graphe_liste


# ------------------------- #
# -- Wesh (wesh ?) Powel -- #
# ------------------------- #

def degre(G):
    return [len(voisins) for voisins in G]


def sommetsTries(G):
    deg_2_sommets = defaultdict(list)
    
    for sommet, deg in enumerate(degre(G)):
        deg_2_sommets[deg].append(sommet)

    sommets = []
    
    for deg in sorted(
        deg_2_sommets.keys(), 
        key = lambda x: -x
    ):
        sommets += deg_2_sommets[deg]
    
    return sommets


def colorationWP(G):
    G = graph_dico_2_liste(G)

    couleurs = [-1]*len(G)
    coul     = -1 # Codage arbitraire des couleurs dans N.
    
    sommets_restants = sommetsTries(G)
    
    while sommets_restants:
        coul = coul + 1

        smax           = sommets_restants.pop(0)
        couleurs[smax] = coul
        
        sommets_autre_coul = G[smax]
        ind_a_poper        = []
        
        for ind, sommet in enumerate(sommets_restants):
            if sommet not in sommets_autre_coul:
                couleurs[sommet] = coul
                ind_a_poper.append(ind)
                                   
                sommets_autre_coul |= G[sommet]

        for k, ind in enumerate(ind_a_poper):
            sommets_restants.pop(ind - k)

    return couleurs


# ------------ #
# -- TEST -- #
# ------------ #

for sommet, coul in enumerate(colorationWP(GRAPHE)):
    print(f"Sommet {sommet} en couleur {coul}")
