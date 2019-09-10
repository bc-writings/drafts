from copy import deepcopy

from .config import *


def upcoefs(coefs):
# coefs has been build using downcoefs.
#
# Add the iniial 1 and 0
    coefmat = deepcopy(coefs)

    coefmat[-2].append(0)
    coefmat[-1].append(1)

# Let's apply the visual algo.
    for i in range(len(coefmat) - 2, 0, -1):
        left, _ , right = coefmat[i]
        below           = coefmat[i+1][2]

        newright = left*right + below

        coefmat[i-1].append(newright)

    return coefmat


def upsteps(coefmat):
    height = len(coefmat)

# Starting the visual algo.
    newstep = []

    for r, row in enumerate(coefmat):
        if r < height - 2:
            row = row[:2]

        row = [
            c
            if c is None else
            [SPACING, f"{c}"]
            for c in row
        ]

        newstep.append(row)

    newstep[-1][2][0] = EXPLAIN_ACTIVATED
    newstep[-2][2][0] = EXPLAIN_ACTIVATED

    matrix_tikzcodes = [newstep]
    extras           = [""]

# Focus the numbers used.
    newstep = deepcopy(matrix_tikzcodes[-1])

    newstep[-2][0][0] = BLUE
    newstep[-2][2][0] = BLUE

    newstep[-1][2][0] = BLUE

    matrix_tikzcodes.append(newstep)
    extras.append("")

# Looping the visual algo.
    newstep = deepcopy(matrix_tikzcodes[0])

    for r in range(height-2, 0, -1):
# Put the new left value in a blue box with arrows.
        newleftval  = coefmat[r-1][-1]
        q , _ , lup = coefmat[r]
        ldown       = coefmat[r+1][-1]

        newstep = deepcopy(matrix_tikzcodes[-1])

        newstep[r][1][0] = BLUR

        newstep[r-1].append([BLUE, newleftval])

        matrix_tikzcodes.append(newstep)

        extras.append(f"""

    \\draw[red] (mat-{r+1}-1) -- (mat-{r+1}-3)
                node[midway,draw,oc]{{$\\times$}};

    \\draw[red] (mat-{r+1}-3.east) -- ++ (2.5em,0) |- (mat-{r+2}-3.east)
                node[pos=0.25,draw,oc](plus){{$+$}}
                node[above right=3em and -1.25em of plus,fe] (f){{${q} \\times {lup} + {ldown} = {newleftval}$}} ;

    \\draw[red,-triangle 60] (plus) -| (f) (f.west) --  ++(-1.75em,0);
        """.rstrip())

# Preparing next step.
        newstep = deepcopy(matrix_tikzcodes[-1])

        newstep[r][1][0] = SPACING # Unblur !

# No new step !
        if newstep[r-1][0] is None:
            newstep[r-1][2][0] = SPACING

            newstep[r][0][0] = SPACING
            newstep[r][2][0] = SPACING

            newstep[r+1][2][0] = SPACING

# One new step is coming...
        else:
            newstep[r-1][0][0] = BLUE

            newstep[r][0][0] = SPACING

            newstep[r+1][2][0] = SPACING

        matrix_tikzcodes.append(newstep)
        extras.append("")

# Nothing more to do.
    return matrix_tikzcodes, extras
