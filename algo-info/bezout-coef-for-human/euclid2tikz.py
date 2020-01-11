# Source for the TiKZ decorated paths
#     * https://tex.stackexchange.com/a/507419/6880

from copy import deepcopy

from mistool.os_use import PPath

from euclid2tikz.down import *
from euclid2tikz.up import *
from euclid2tikz.tikzit import *


# ------------------- #
# -- USER'S CHOICE -- #
# ------------------- #

a, b = 141, 27

SHOW_ALL = True
SUBDIR   = "27-141[all]"

SHOW_ALL = False
SUBDIR   = "27-141[Main]"


# --------------- #
# -- CONSTANTS -- #
# --------------- #

THIS_DIR      = PPath(__file__).parent
STEPS_DIR     = THIS_DIR / "tikz" / SUBDIR

STEPS_DIR.create("dir")

with (THIS_DIR / "config" / "minitikz.tex").open(
    mode     = "r",
    encoding = "utf-8"
) as f:
    TIKZ_TEMPLATE = f.read()

for old, new in [
    ("{", "{{"),
    ("}", "}}"),
    ("<<", "{"),
    (">>", "}"),
]:
    TIKZ_TEMPLATE = TIKZ_TEMPLATE.replace(old, new)


# --------------- #
# -- FUNCTIONS -- #
# --------------- #

def buildlasttikz(coefmat, laststep):
    print("* BÉZOUT-BACHET COEFS [START] - Building the TiKz codes...")

    result = coefmat[0][1]*coefmat[1][2] - coefmat[0][2]*coefmat[1][1]

    lastextra = f"""
    \\draw[fe] (mat-1-2.north west) -- (mat-1-3.north east)
           -- (mat-2-3.south east) -- (mat-2-2.south west)
           -- (mat-1-2.north west);

    \\draw[red,-triangle 60] (mat-1-3.north east) -- ++ (0,-2.5em) |- ++ (3em,0)
               node[pos=2.05, lfe] (f){{${coefmat[0][1]} \\times {coefmat[1][2]} - {coefmat[0][2]} \\times {coefmat[1][1]} = {result}$}};
    """.rstrip()

    laststepfile = STEPS_DIR / "last.tkz"

    with laststepfile.open(
        mode     = "w",
        encoding = "utf-8"
    ) as f:
        matrix_tikzcode = TIKZ_TEMPLATE.format(
            MATRIX = f"\n{pymat2tikzmat(laststep)}\n    ",
            EXTRA  = lastextra
        )

        f.write(matrix_tikzcode)

    print("* BÉZOUT-BACHET COEFS [END] - Building the TiKz codes...")


def buildalltikz(a, b):
# Down phase
    print("* ALL DOWN PHASES [START] - Building the TiKz codes...")

    coefmat          = downcoefs(a, b)
    matrix_tikzcodes = downsteps(coefmat)

    for i, step in enumerate(matrix_tikzcodes, 1):
        stepfile = STEPS_DIR / f"down-{i}.tkz"

        with stepfile.open(
            mode     = "w",
            encoding = "utf-8"
        ) as f:
            matrix_tikzcode = TIKZ_TEMPLATE.format(
                MATRIX = "\n" + pymat2tikzmat(step) + "\n    ",
                EXTRA  = ""
            )

            f.write(matrix_tikzcode)

    print("* ALL DOWN PHASES [END] - TiKz codes has been build.")

# Up phase
    print("* ALL UP PHASES [START] - Building the TiKz codes...")

    coefmat                  = upcoefs(coefmat)
    matrix_tikzcodes, extras = upsteps(coefmat)

    for i, step in enumerate(matrix_tikzcodes, 1):
        stepfile = STEPS_DIR / f"up-{i}.tkz"

        with stepfile.open(
            mode     = "w",
            encoding = "utf-8"
        ) as f:
            onextra = extras[i-1]

            matrix_tikzcode = TIKZ_TEMPLATE.format(
                MATRIX = f"\n{pymat2tikzmat(step)}\n    ",
                EXTRA  = onextra
            )

            f.write(matrix_tikzcode)

    laststep = step

    print("* ALL UP PHASES [END] - Building the TiKz codes...")

# Showing the merly Bézout-Bachet coefficients.
    buildlasttikz(coefmat, laststep)


def buildmaintikz(a, b):
# Down phase
    print("* MAIN DOWN PHASE [START] - Building the TiKz codes...")

    coefmat          = downcoefs(a, b)
    matrix_tikzcodes = downsteps(coefmat)

    step = matrix_tikzcodes[-1]

    stepfile = STEPS_DIR / f"down.tkz"

    with stepfile.open(
        mode     = "w",
        encoding = "utf-8"
    ) as f:
        matrix_tikzcode = TIKZ_TEMPLATE.format(
            MATRIX = "\n" + pymat2tikzmat(step) + "\n    ",
            EXTRA  = ""
        )

        f.write(matrix_tikzcode)

    print("* MAIN DOWN PHASE [END] - TiKz codes has been build.")

# Up phase
    print("* UP PHASE [START] - Building the TiKz codes...")

    coefmat                  = upcoefs(coefmat)
    matrix_tikzcodes, extras = upsteps(coefmat)

    step    = matrix_tikzcodes[-1]
    onextra = extras[-1]

    stepfile = STEPS_DIR / f"up.tkz"

    with stepfile.open(
        mode     = "w",
        encoding = "utf-8"
    ) as f:
        matrix_tikzcode = TIKZ_TEMPLATE.format(
            MATRIX = "\n" + pymat2tikzmat(step) + "\n    ",
            EXTRA  = onextra
        )

        f.write(matrix_tikzcode)

    laststep = step

    print("* UP PHASE [END] - Building the TiKz codes...")

# Showing the merly Bézout-Bachet coefficients.
    buildlasttikz(coefmat, laststep)


# ----------------- #
# -- LET'S START -- #
# ----------------- #

if __name__ == "__main__":
    if SHOW_ALL:
        buildalltikz(a, b)

    else:
        buildmaintikz(a, b)
