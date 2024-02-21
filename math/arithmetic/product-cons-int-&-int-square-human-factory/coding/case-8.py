# def f(x):
#     return alpha*(alpha*x**2 - 10) * (alpha*x**2 - 4) * (alpha*x**2 + 2)

# alpha_vals = [1]

# def f(x):
#     return alpha*(alpha*x**2 - 6) * (alpha*x**2 + 4) * (alpha*x**2 + 6)

# alpha_vals = [1, 2, 3, 6]

def f(x):
    return alpha*(alpha*x**2 - 12) * (alpha*x**2 - 6) * (alpha*x**2 - 2)

alpha_vals = [1, 2, 3, 6]


for nmod in range(2, 101):
    nmod_ok = True

    for alpha in alpha_vals:
        squares = set(
            i**2 % nmod
            for i in range(nmod)
        )

        print(f"{nmod=} , {alpha=}")

        for x in range(nmod):
            if f(x) % nmod in squares:
                nmod_ok = False

                print(f"    + Broken by {x=}")
                break

    if nmod_ok:
        print(f"{squares=}")
        exit()
