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



# --------------- #
# -- CONSTANTS -- #
# --------------- #

n = 2**4


# ----------------------- #
# -- METHOD OF SOLVING -- #
# ----------------------- #

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

# Add one black cell in the good sub chess so as to have a new trimino at
# the center, and then do the recursive call.
    subChess = addCenteredCells(subChess, color)

    color += posCenter

    for loc in subChess:
        subChess[loc] = addOneTrimino(subChess[loc], color)
        color += posCenter

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


# --------- #
# -- GUI -- #
# --------- #

def drawInitial():
    plt.axes(xlim = (0, n), ylim = (0, n))
    plt.axis('off')

    for line in range(n):
        for col in range(n):
            rect = mpatches.Rectangle(
                (col, line), 1, 1,
                facecolor = "white",
                edgecolor = "black"
            )

            plt.gca().add_patch(rect)

def onclick(event):
# The hole
    col  = int(event.xdata)
    line = int(event.ydata)

    rect = mpatches.Rectangle(
        (col, line), 1, 1,
        facecolor = "black",
        edgecolor = "black"
    )

    plt.gca().add_patch(rect)

# Solving
    chess = zeros((n,n)) - 1
    chess[col, line] = 0

    chessFilled = addOneTrimino(chess)

    maxColor = amax(chessFilled)

    colorMap  = plt.get_cmap('jet')
    cNorm     = colors.Normalize(vmin = 0, vmax = maxColor)
    scalarMap = cmx.ScalarMappable(norm = cNorm, cmap = colorMap)

    for col in range(n):
        for line in range(n):
            color = chessFilled[col, line]

            if color != 0:
                color = scalarMap.to_rgba(color)

                rect = mpatches.Rectangle(
                    (col, line), 1, 1,
                    facecolor = color,
                    edgecolor = "black"
                )

                plt.gca().add_patch(rect)

# Updating the draw
    plt.draw()


def onkey(event):
    if event.key == " ":
        drawInitial()
        plt.draw()


fig = plt.figure()
fig.canvas.mpl_connect('button_press_event', onclick)
fig.canvas.mpl_connect('key_press_event', onkey)

drawInitial()

plt.show()

