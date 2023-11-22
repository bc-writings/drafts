import matplotlib.pyplot as plt
import matplotlib.patches as mpatches

from mistool.os_use import PPath

THIS_DIR = PPath(__file__).parent

SAVE_IMG = True
SAVE_IMG = False

MAXDEPTH = 5

XMAX, YMAX = 10, 10

BLACK, WHITE = "k", "w"


def buildsubchecker(
    x, y,
    width, height,
    color = BLACK,
    depth = 0
):
    global MAXDEPTH

    if depth > MAXDEPTH:
        return []

    if depth == MAXDEPTH:
        return [(
            x, y,
            width, height,
            color
        )]


    width  /= 2
    height /= 2

    x_middle = x + width
    y_middle = y + height

    depth += 1

    subsquares = []

    for x_bl, y_bl, c in [
# Sous-carré dans le coin supérieur gauche.
        (x, y_middle, WHITE),
# Sous-carré dans le coin inférieur droit.
        (x_middle, y, WHITE),
# Sous-carré dans le coin supérieur droit.
        (x_middle, y_middle, BLACK),
# Sous-carré dans le coin inférieur gauche.
        (x, y, BLACK),
    ]:
        subsquares += buildsubchecker(
            x      = x_bl,
            y      = y_bl,
            width  = width,
            height = height,
            color  = c,
            depth  = depth
        )

    return subsquares


allcells = buildsubchecker(
    x      = 0 ,
    y      = 0,
    width  = XMAX,
    height = YMAX
)

plt.axes(
    xlim = (0, XMAX),
    ylim = (0, YMAX)
)
plt.axis('off')


for (
    x, y,
    width, height,
    color
) in allcells:
    rect = mpatches.Rectangle(
        (x, y),
        width     = width,
        height    = height,
        facecolor = color,
        edgecolor = color
    )

    plt.gca().add_patch(rect)


if SAVE_IMG:
    plt.show()

else:
    imgpath = THIS_DIR / "img" / f"heckerboard-{MAXDEPTH}-depth.png"

    plt.savefig(imgpath)
