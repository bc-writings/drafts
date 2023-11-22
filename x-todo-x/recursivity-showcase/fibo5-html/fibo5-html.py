from random import choice


def visualise(func):
    
    
    couleurs = ["#5D8AA8", "#F0F8FF", "#E32636",
    "#EFDECD", "#FFBF00", "#9966CC", "#A4C639", "#CD9575",
    "#915C83", "#008000", "#00FFFF", "#B2BEB5", "#FF9966",
    "#FDEE00", "#007FFF", "#98777B", "#3D2B1F", "#66FF00"]
    L = [ """
        <!DOCTYPE html>
        <html lang="fr">
        <head>
            <meta charset="utf-8">
            <title> Fibonacci </title>
            <style>
                html{font-size: 18px;}
                body{margin: 2rem auto; width: 80%; display:flex;}
                div{ 
                    margin:3px;
                    padding:3px;
                    }
                span.barre{display:inline-block;}
            </style>
        </head>
        <body>
        """,
        """</body> 
        </html>"""
        ]
        
        
    visualise.level = 0
    def wrapped(n):
        couleur = choice(couleurs)
        visualise.level += 1
        L.insert(-1,f"""<div style='color:{couleur};border:2px solid {couleur};'>
        <span class='barre' style='min-width:{visualise.level*10}px; 
        border-top:10px solid transparent;border-bottom: 10px solid transparent;
        border-left: 10px solid {couleur};'></span>{func.__name__}({n}) <br>\n""")
        a = func(n)
        L.insert(-1,f"""<span class='barre' style='min-width:{visualise.level*10}px; 
        border-top:10px solid transparent;border-bottom: 10px solid transparent;
        border-right: 10px solid {couleur};'></span>{func.__name__}({n}) = {a}</div>\n""")
        visualise.level -= 1
        with open(func.__name__ + '.html', 'w') as f: print(''.join(L), file=f)
        return a
    return wrapped
    
    
@visualise
def fibo(n):
    if n <= 1:
        return n
    else:
        return fibo(n-1) + fibo(n-2)




print(f"fibo(6)={fibo(6)}")
