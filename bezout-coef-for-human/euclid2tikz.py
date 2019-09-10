from copy import deepcopy

from mistool.os_use import PPath

from euclid2tikz.down import *
from euclid2tikz.up import *
from euclid2tikz.tikzit import *


# ------------------- #
# -- USER'S CHOICE -- #
# ------------------- #

a, b = 141, 27


# --------------- #
# -- CONSTANTS -- #
# --------------- #

THIS_DIR      = PPath(__file__).parent
STEPS_DIR     = THIS_DIR / "steps"

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

def buildtikz(a, b):
# Down phase
    print("* DOWN PHASE [START] - Building the TiKz codes...")

    coefmat          = downcoefs(a, b)
    matrix_tikzcodes = downsteps(coefmat)

    for i, step in enumerate(matrix_tikzcodes, 1):
        stepfile = STEPS_DIR / f"{i}-down.tkz"

        with stepfile.open(
            mode     = "w",
            encoding = "utf-8"
        ) as f:
            matrix_tikzcode = TIKZ_TEMPLATE.format(
                MATRIX = "\n" + pymat2tikzmat(step) + "\n    ",
                EXTRA  = ""
            )

            f.write(matrix_tikzcode)

    inext = i + 1

    print("* DOWN PHASE [END] - TiKz codes has been build.")

# Up phase
    print("* UP PHASE [START] - Building the TiKz codes...")

    coefmat                  = upcoefs(coefmat)
    matrix_tikzcodes, extras = upsteps(coefmat)

    for i, step in enumerate(matrix_tikzcodes, inext):
        stepfile = STEPS_DIR / f"{i}-down.tkz"

        with stepfile.open(
            mode     = "w",
            encoding = "utf-8"
        ) as f:
            onextra = extras[i - inext]

            matrix_tikzcode = TIKZ_TEMPLATE.format(
                MATRIX = f"\n{pymat2tikzmat(step)}\n    ",
                EXTRA  = onextra
            )

            f.write(matrix_tikzcode)

    print("* UP PHASE [END] - Building the TiKz codes...")

# ----------------- #
# -- LET'S START -- #
# ----------------- #

if __name__ == "__main__":
    buildtikz(a, b)
