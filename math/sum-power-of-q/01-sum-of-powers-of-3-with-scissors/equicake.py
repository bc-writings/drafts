#!/usr/bin/env python3

# Sources :
#    * https://www.idpoisson.fr/perrollaz/Animation.html
import numpy as np
from scipy.integrate import odeint
import matplotlib.pyplot as plt
import matplotlib.animation as animation


with plt.xkcd():

    n = 4
    t = np.linspace(0, 2*np.pi, 160)
    x = (1+np.cos(n*t)+(np.sin(n*t))**2)*np.cos(t)
    y = (1+np.cos(n*t)+(np.sin(n*t))**2)*np.sin(t)




    # Création de la figure et de l'axe

    fig, ax = plt.subplots()

    # Création de la ligne qui sera mise à jour au fur et à mesure
    line, = ax.plot([],[], color='blue')
    point, = ax.plot([], [], ls="none", marker="o")

    #Gestion des limites de la fenêtre
    ax.set_xlim([1.05*np.min(x), 1.05*np.max(x)])
    ax.set_ylim([1.05*np.min(y), 1.05*np.max(y)])


    # Création de la function qui sera appelée à "chaque nouvelle image"
    def animate(k):
        i = min(k, x.size)
        line.set_data(x[:i], y[:i])
        point.set_data(x[i], y[i])
        return line, point

    # Génération de l'animation, frames précise les arguments numérique reçus par func (ici animate),
    # interval est la durée d'une image en ms, blit gère la mise à jour
    ani = animation.FuncAnimation(
        fig      = fig,
        func     = animate,
        frames   = range(x.size),
        interval = 50,
        blit     = True
    )


plt.show()

    # Création du fichier, dpi : résolution, fps : images par secondes

# ani.save(filename="courbe.mp4", dpi =80, fps=20)
