from pathlib import Path

import numpy as np
import numpy.random as rd


DEBUG = False
DEBUG = True


# ---------------- #
# -- PARAMETERS -- #
# ---------------- #

ALPHA   = 2
BETA    = 1
GAMMA   = 0.5
Q_PHERO = 1
R_EVAPO = 0.1


# ---------- #
# -- MISC -- #
# ---------- #

THIS_DIR = Path(__file__).parent


# ------------------ #
# -- ANTS'FACTORY -- #
# ------------------ #


# ---------- #
# -- TEST -- #
# ---------- #

if DEBUG:
    MAT_GRAPH = [
        [0, 2, 3, 4, 5],    
        [2, 0, 4, 3, 6],    
        [3, 4, 0, 6, 7],    
        [4, 3, 6, 0, 8],    
        [5, 6, 7, 6, 0],    
    ]

    BEST_COST = 27



    exit()


datas = np.load(THIS_DIR / "djibouti.npy")

print(datas[0])
