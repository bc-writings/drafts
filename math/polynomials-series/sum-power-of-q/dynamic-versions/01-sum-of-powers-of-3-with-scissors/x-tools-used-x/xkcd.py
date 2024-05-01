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

q = 3
n = 2

xmax = 10
ymax = 7
ymid = 3


# -------------- #
# -- Let's go -- #
# -------------- #

i = 0

with plt.xkcd():
    plt.axes(xlim = (0, xmax), ylim = (0, ymax))

    while(i <= n):
        plt.axis('off')

    # maxColor = amax(chessFilled)
    #
    # colorMap  = plt.get_cmap('jet')
    # cNorm     = colors.Normalize(vmin = 0, vmax = maxColor)
    # scalarMap = cmx.ScalarMappable(norm = cNorm, cmap = colorMap)
    # color = scalarMap.to_rgba(color)


        rect = mpatches.Rectangle(
            (0, ymid), xmax, 1,
            # facecolor = color,
            edgecolor = "black"
        )

        plt.gca().add_patch(rect)

        plt.title(r'$\alpha > \beta$')
        plt.savefig(fname=f"imgs/test-{i}.png")

        i+=1
