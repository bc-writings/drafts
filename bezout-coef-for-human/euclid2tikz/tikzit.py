from copy import deepcopy

from .config import *


def pymat2tikzmat(matrix):
    matrix = deepcopy(matrix)

# Complete rows such as to have a real matrice.
    width = max(len(row) for row in matrix)

    for r, row in enumerate(matrix):
        actualwidth = len(row)

        if actualwidth < width:
            for _ in range(width - actualwidth):
                row.append(None)

            matrix[r] = row

# Add the space hacking cells.
    height = len(matrix)

    for c in range(width):
        onlynone = True

        for r in range(height):
            if matrix[r][c] is not None:
                onlynone = False
                break


        if onlynone:
            for r in range(height-1, -1, -1):
                if matrix[r][c] == None:
                    matrix[r][c] = (SPACING, "\\ph")
                    break

# Latexify the cells.
    for r in range(height):
        for c in range(width):
            if matrix[r][c] == None:
                matrix[r][c] = ""

            else:
                style, content = matrix[r][c]
                matrix[r][c] = f"|[{STYLES[style]}]|${content}$"

# Beautify the code with additiona spacing in the TiKz code.
    height = len(matrix)

    for c in range(width):
        maxcodewidth = max(len(matrix[r][c]) for r in range(height))

        for r in range(height):
            codewidth = len(matrix[r][c])

            if codewidth < maxcodewidth:
                matrix[r][c] += " "*(maxcodewidth - codewidth)

# Let's build the code.
    matrix = [
        " & ".join(row) + r" \\"
        for row in matrix
    ]

    matrix = "\n".join(matrix)

# Nothing more to do.
    return matrix
