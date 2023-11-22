# Source de départ: https://info-llg.fr/commun-mp/?a=td

# Gérer tailel des celluls dynamiquement
# affichage dynamique via update


import matplotlib.pyplot as plt
from random import choice, randint


# -------------------------- #
# -- GENERAL DATA STRUCT. -- #
# -------------------------- #

class Pile:
    def __init__(self):
        self.lst = []

    def empty(self):
        return self.lst == []

    def push(self, x):
        self.lst.append(x)

    def pop(self):
        if self.empty():
            raise ValueError("pile vide")

        return self.lst.pop()

    def clone(self):
        clone = Pile()
        clone.lst = self.lst[:]

        return clone

    @property
    def head(self):
        if self.empty():
            raise ValueError("pile vide")

        return self.lst[-1]


class UnionFind:
    def __init__(self, lst):
        self.lst    = lst
        self.dic    = {lst[i]: i for i in range(len(lst))}
        self.parent = [i for i in range(len(lst))]
        self.rang   = [0 for i in range(len(lst))]

    def representant(self, i):
        if self.parent[i] != i:
            j              = self.representant(self.parent[i])
            self.parent[i] = j

        return self.parent[i]
    
    def find(self, x):
        j = self.representant(self.dic[x])

        return self.lst[j]

    def union(self, x, y):
        i, j   = self.dic[x], self.dic[y]
        ri, rj = self.representant(i), self.representant(j)

        if ri != rj:
            if self.rang[ri] < self.rang[rj]:
                self.parent[ri] = rj

            elif self.rang[rj] < self.rang[ri]:
                self.parent[rj] = ri

            else:
                self.parent[ri] = rj
                self.rang[rj]  += 1


# ------------------- #
# -- (A)MAZ(E|ING) -- #
# ------------------- #

CARD_DIRS = list("NSWE")

class Case:
    def __init__(self):
        self.N = False
        self.W = False
        self.S = False
        self.E = False

    def __str__(self):
        return (
            f"N = {self.N}"
            " | "
            f"E = {self.E}"
            " | "
            f"S = {self.S}"
            " | "
            f"W = {self.W}"
        )

    def state(self, name):
        assert name in CARD_DIRS, "unknown cardinal direction."

        return getattr(self, name)

    def open(self, name):
        assert name in CARD_DIRS, "unknown cardinal direction."

        setattr(self, name, True)

    def close(self, name):
        assert name in CARD_DIRS, "unknown cardinal direction."

        setattr(self, name, False)


class Labyrinthe:
    def __init__(self, height, width, timesleep = 10**-6):
        self.height = height
        self.width  = width
        self.tab    = [
            [Case() for j in range(width)] 
            for i in range(height)
        ]

        self.timesleep = timesleep

        self.card_dir_configs = {
            "W": ("E",  0, -1, lambda i, j: j > 0),
            "E": ("W",  0,  1, lambda i, j: j < width - 1),
            "N": ("S", -1,  0, lambda i, j: i > 0),
            "S": ("N",  1,  0, lambda i, j: i < height - 1),
        }

        self.fig = None

    def create(self):
        pile   = Pile()
        dejavu = [
            [False for j in range(self.width)] 
            for i in range(self.height)
        ]
        
        i, j = randint(0, self.height), randint(0, self.width)
        
        pile.push((i, j))
        dejavu[i][j] = True
        
        while not pile.empty():
            (i, j)       = pile.pop()
            card_dir_oks = []

            for card_dir, (_, d_i, d_j, validate) in self.card_dir_configs.items():
                if validate(i, j) and not dejavu[i + d_i][j + d_j]:
                    card_dir_oks.append(card_dir)

            if len(card_dir_oks) > 1:
                pile.push((i, j))

            if len(card_dir_oks) > 0:
                card_dir = choice(card_dir_oks)

                oppo_card_dir, d_i, d_j, _ = self.card_dir_configs[card_dir]

                i_near, j_near = i + d_i, j + d_j

                self.tab[i][j]          .open(card_dir)
                self.tab[i_near][j_near].open(oppo_card_dir)
                    
                dejavu[i_near][j_near] = True

                pile.push((i_near, j_near))

    def initgraph(self):
        self.fig = plt.figure(1, figsize=(self.width/3.2, self.height/3.2))
        
        self.ax = self.fig.add_subplot(111)
        self.ax.axis([-1, self.width+1, -1, self.height+1])
        self.ax.get_xaxis().set_visible(False)
        self.ax.get_yaxis().set_visible(False)

        plt.ion()

    def show(self, sol = Pile(), keepit = False):
        if self.fig is None:
            firtsdraw = True
            self.initgraph()  

        else:
            firtsdraw = False
            plt.cla()

        self.ax.plot(
            [0, 0, self.width, self.width, 0],
            [0, self.height, self.height, 0, 0], 
            linewidth = 2
        )
        
        for i in range(self.height - 1):
            for j in range(self.width):
                if not self.tab[i][j].S:
                    self.ax.plot(
                        [j, j + 1], 
                        [self.height - i - 1, self.height - i - 1], 
                        'b'
                    )

        for j in range(self.width - 1):
            for i in range(self.height):
                if not self.tab[i][j].E:
                    self.ax.plot(
                        [j + 1, j + 1], 
                        [self.height - i, self.height - i - 1], 
                        'b'
                    )

        if not sol.empty():
            X, Y = [], []

            while not sol.empty():
                (i, j) = sol.pop()

                X.append(j+.5)
                Y.append(self.height-i-.5)
            
            self.ax.plot(X, Y, 'r', linewidth = 2)

        if keepit:
            plt.ioff()
            plt.show()

        elif firtsdraw:
            plt.show()

        else:
            plt.draw()
            plt.pause(self.timesleep)
