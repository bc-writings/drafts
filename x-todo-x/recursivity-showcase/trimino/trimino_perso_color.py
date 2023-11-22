#!/usr/bin/env python3

# Sources :
#    * http://www.mail-archive.com/matplotlib-users@lists.sourceforge.net/msg08387.html
#    * http://stackoverflow.com/questions/8931268/using-colormaps-to-set-color-of-line-in-matplotlib

from numpy import amax, concatenate, zeros
from random import randint

import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
import matplotlib.colors as colors
import matplotlib.cm as cmx


# ----------- #
# -- Chess -- #
# ----------- #

n = 2**3

# `(-1)` indicates an empty cell.
chess = zeros((n,n)) - 1

# The black cell is coded by `0`.
line = randint(0, n - 1)
col  = randint(0, n - 1)

chess[line, col] = 0


# ------------------------ #
# -- Method for solving -- #
# ------------------------ #

# color = 5 ---> This allows to well see the hole.
def addOneTrimino(
    oneChess,
    color = 5
):
    dim = len(oneChess)

# Special case of `n = 2`.
    if dim == 2:
        for line in range(2):
            for col in range(2):
                if oneChess[line, col] == -1:
                    oneChess[line, col] = color

        return oneChess

# Recursive calls.
    posCenter = dim // 2

# lu = left up   ; ru = right up
# ld = left down ; rd = right down
    subChess = {
        "lu": oneChess[:posCenter, :posCenter],
        "ru": oneChess[:posCenter, posCenter:],
        "ld": oneChess[posCenter:, :posCenter],
        "rd": oneChess[posCenter:, posCenter:]
    }

# Add one new colored cell in the good sub chess so as to have a new trimino at
# the center, and then do the recursive callings.
    subChess = addCenteredCells(subChess, color)

    color += 1

    for loc in subChess:
        subChess[loc] = addOneTrimino(subChess[loc], color)
        color += 1

# Let's gather the four sub chess.
    oneChessUp   = concatenate((subChess["lu"], subChess["ru"]), axis = 1)
    oneChessDown = concatenate((subChess["ld"], subChess["rd"]), axis = 1)

    return concatenate((oneChessUp, oneChessDown), axis = 0)

def addCenteredCells(subChess, color):
    for loc in subChess:
        if int(amax(subChess[loc])) == -1:
            if loc == "lu":
                subChess[loc][-1, -1] = color

            elif loc == "ru":
                subChess[loc][-1, 0] = color

            elif loc == "ld":
                subChess[loc][0, -1] = color

            else:
                subChess[loc][0, 0] = color

    return subChess


# -------------- #
# -- Let's go -- #
# -------------- #

chessFilled = addOneTrimino(chess)

plt.axes(xlim = (0, n), ylim = (0, n))
plt.axis('off')

maxColor = amax(chessFilled)

colorMap  = plt.get_cmap('jet')
cNorm     = colors.Normalize(vmin = 0, vmax = maxColor)
scalarMap = cmx.ScalarMappable(norm = cNorm, cmap = colorMap)

for line in range(n):
    for col in range(n):
        color = chessFilled[line, col]

        if color == 0:
            color = "black"

        else:
            color = scalarMap.to_rgba(color)

        rect = mpatches.Rectangle(
            (line, col), 1, 1,
            facecolor = color,
            edgecolor = "black"
        )

        plt.gca().add_patch(rect)

plt.show()
