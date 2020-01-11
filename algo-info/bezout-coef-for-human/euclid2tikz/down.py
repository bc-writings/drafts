from copy import deepcopy

from .config import *


def downcoefs(a, b):
# a is bigger than b !
    if a < b:
        a, b = b, a

# We have a > b !
    coefmat = [
        [None, a]
    ]

# Let's build the ASCII steps.
    while(b != 0):
        q, r = a//b, a%b

        coefmat.append([q, b])

        a,b = b, r

    coefmat.append([None, r])

    return coefmat


def downsteps(coefmat):
# Starting the visual algo.
    a = coefmat[0][1]
    b = coefmat[1][1]

    matrix_tikzcodes = [
        [
            [None, [SPACING, a]],
            [None, [SPACING, b]],
        ],
        [
            [None, [BLUE, a]],
            [None, [BLUE, b]],
        ]
    ]

# Looping the visual algo.
    for i, (q, b) in enumerate(coefmat[1:-1], 1):
        a = coefmat[i-1][1]
        r = coefmat[i+1][1]

# Showing euclidean division.
        newstep = [[
            [EXPLAIN_ACTIVATED, q],
            [BLUE, b],
            [LONG_EXPLAIN_ACTIVATED, f"{a} = {q} \\times {b} + {r}"]
        ]]

        newstep = deepcopy(matrix_tikzcodes[-1][:-1]) + newstep + [[
            None,
            [EXPLAIN_ACTIVATED, r],
        ]]

        matrix_tikzcodes.append(newstep)

# Preparing next step.
        newstep = deepcopy(matrix_tikzcodes[-1])

        newstep[-3][1][0] = SPACING

        newstep[-2][0][0] = SPACING
        newstep[-2] = newstep[-2][:2]

        newstep[-1][1][0] = BLUE

        matrix_tikzcodes.append(newstep)

# No more blue boxes needed.
    newstep = deepcopy(matrix_tikzcodes[-1])

    newstep[-2][1][0] = SPACING
    newstep[-1][1][0] = SPACING

    matrix_tikzcodes.append(newstep)

# Nothing more to do.
    return matrix_tikzcodes
