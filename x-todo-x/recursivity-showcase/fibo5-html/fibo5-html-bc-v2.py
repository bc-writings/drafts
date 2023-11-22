from random import choice


def visualise(func):
    couleurs = [
        "#5D8AA8", "#F0F8FF", "#E32636",
        "#EFDECD", "#FFBF00", "#9966CC",
        "#A4C639", "#CD9575", "#915C83",
        "#008000", "#00FFFF", "#B2BEB5",
        "#FF9966", "#FDEE00", "#007FFF",
        "#98777B", "#3D2B1F", "#66FF00"
    ]

    starthtml = """
<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8">
        <title> Fibonacci </title>
        <style>
            html {
                font-size: 18px;
            }
            body {
                margin : 2rem auto;
                width  : 80%;
                display: flex;
            }
            div {
                margin : 3px;
                padding: 3px;
            }
            span.barre {
                display: inline-block;
            }
        </style>
    </head>
    <body>
"""
    endhtml = """
    </body>
</html>
"""

    htmlcode = []

    level   = 0
    numcall = 0

    fname = func.__name__

    def wrapped(n):
        nonlocal level, numcall
        level   += 1
        numcall += 1

        couleur = choice(couleurs)

        htmlcode.append(
            f"""
            <div style='color : {couleur};
                        border: 2px solid {couleur};'>
                <span class='barre'
                      style='min-width    : {level*10}px;
                             border-top   : 10px solid transparent;
                             border-bottom: 10px solid transparent;
                             border-left  : 10px solid {couleur};'>
                </span>
                {fname}({n}) [[{numcall} - {level}]]
                <br>
            """
        )

        a = func(n)

        htmlcode.append(
            f"""
                <span class='barre'
                      style='min-width    : {level*10}px;
                             border-top   : 10px solid transparent;
                             border-bottom: 10px solid transparent;
                             border-right : 10px solid {couleur};'>
                </span>
                {fname}({n}) = {a}
            </div>
            """
        )

        level -= 1

        if level == 0:
            with open(f"{fname}.html", 'w') as f:
                f.write(starthtml + ''.join(htmlcode) + endhtml)

        return a

    return wrapped


@visualise
def fibo(n):
    if n <= 1:
        return n
    else:
        return fibo(n-1) + fibo(n-2)



n = 5

print(f"fibo({n})={fibo(n)}")
