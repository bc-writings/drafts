from numpy.random import randint
import matplotlib.pyplot as plt
import tkinter


class Pile:
    """ définition d'une pile à l'aide de la classe List """
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


class Case:
    def __init__(self):
        self.N = False
        self.W = False
        self.S = False
        self.E = False


class Labyrinthe:
    def __init__(self, p, q):
        self.p = p
        self.q = q
        self.tab = [[Case() for j in range(q)] for i in range(p)]

    def create(self):
        pile = Pile()
        dejavu = [[False for j in range(self.q)] for i in range(self.p)]
        i, j = randint(self.p), randint(self.q)
        pile.push((i, j))
        dejavu[i][j] = True
        while not pile.empty():
            (i, j) = pile.pop()
            v = []
            if j < self.q-1 and not dejavu[i][j+1]:
                v.append('E')
            if i > 0 and not dejavu[i-1][j]:
                v.append('N')
            if j > 0 and not dejavu[i][j-1]:
                v.append('W')
            if i < self.p-1 and not dejavu[i+1][j]:
                v.append('S')
            if len(v) > 1:
                pile.push((i, j))
            if len(v) > 0:
                c = v[randint(len(v))]
                if c == 'N':
                    self.tab[i][j].N = True
                    self.tab[i-1][j].S = True
                    dejavu[i-1][j] = True
                    pile.push((i-1, j))
                elif c == 'W':
                    self.tab[i][j].W = True
                    self.tab[i][j-1].E = True
                    dejavu[i][j-1] = True
                    pile.push((i, j-1))
                elif c == 'S':
                    self.tab[i][j].S = True
                    self.tab[i+1][j].N = True
                    dejavu[i+1][j] = True
                    pile.push((i+1, j))
                else:
                    self.tab[i][j].E = True
                    self.tab[i][j+1].W = True
                    dejavu[i][j+1] = True
                    pile.push((i, j+1))

    def show(self, sol=Pile()):
        fig = plt.figure(1, figsize=(self.q/3.2, self.p/3.2))
        ax = fig.add_subplot(111)
        ax.axis([-1, self.q+1, -1, self.p+1])
        ax.get_xaxis().set_visible(False)
        ax.get_yaxis().set_visible(False)
        ax.plot([0, 0, self.q, self.q, 0],
                 [0, self.p, self.p, 0, 0], linewidth=2)
        for i in range(self.p-1):
            for j in range(self.q):
                if not self.tab[i][j].S:
                    ax.plot([j, j+1], [self.p-i-1, self.p-i-1], 'b')
        for j in range(self.q-1):
            for i in range(self.p):
                if not self.tab[i][j].E:
                    ax.plot([j+1, j+1], [self.p-i, self.p-i-1], 'b')
        if not sol.empty():
            X, Y = [], []
            while not sol.empty():
                (i, j) = sol.pop()
                X.append(j+.5)
                Y.append(self.p-i-.5)
            ax.plot(X, Y, 'r', linewidth=2)
        plt.show()


class UnionFind:
    def __init__(self, lst):
        self.lst = lst
        self.dic = {lst[i]:i for i in range(len(lst))}
        self.parent = [i for i in range(len(lst))]
        self.rang = [0 for i in range(len(lst))]

    def representant(self, i):
        if self.parent[i] != i:
            j = self.representant(self.parent[i])
            self.parent[i] = j
        return self.parent[i]
    
    def find(self, x):
        j = self.representant(self.dic[x])
        return self.lst[j]

    def union(self, x, y):
        i, j = self.dic[x], self.dic[y]
        ri, rj = self.representant(i), self.representant(j)
        if ri != rj:
            if self.rang[ri] < self.rang[rj]:
                self.parent[ri] = rj
            elif self.rang[rj] < self.rang[ri]:
                self.parent[rj] = ri
            else:
                self.parent[ri] = rj
                self.rang[rj] += 1
            
