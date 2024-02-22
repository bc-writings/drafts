# alpha*(alpha*x**2 - 6) * (alpha*x**2 + 4) * (alpha*x**2 + 6)
alpha_tests = [
    (
        1,
        lambda x: (x**2 - 6) * (x**2 + 4) * (x**2 + 6)
    ),
    (
        2,
        lambda x: (x**2 - 3) * (x**2 + 2) * (x**2 + 3)
    ),
    (
        3,
        lambda x: (x**2 - 2) * (3*x**2 + 4) * (3*x**2 + 6)
    ),
    (
        6,
        lambda x: (x**2 - 1) * (3*x**2 + 2) * (3*x**2 + 3)
    ),
]

# alpha*(alpha*x**2 - 10) * (alpha*x**2 - 4) * (alpha*x**2 + 2)
# alpha_tests = [
#     (
#         1,
#         lambda x: (x**2 - 10) * (x**2 - 4) * (x**2 + 2)
#     ),
#     (
#         2,
#         lambda x: (x**2 - 5) * (x**2 - 2) * (x**2 + 1)
#     ),
#     (
#         5,
#         lambda x: (x**2 - 2) * (5*x**2 - 4) * (5*x**2 + 2)
#     ),
#     (
#         10,
#         lambda x: (x**2 - 1) * (5*x**2 - 2) * (5*x**2 + 1)
#     ),
# ]

# alpha*(alpha*x**2 - 12) * (alpha*x**2 - 6) * (alpha*x**2 - 2)
# alpha_tests = [
#     (
#         1,
#         lambda x: (x**2 - 12) * (x**2 - 6) * (x**2 - 2)
#     ),
#     (
#         2,
#         lambda x: (x**2 - 6) * (x**2 - 3) * (x**2 - 1)
#     ),
#     (
#         3,
#         lambda x: (x**2 - 4) * (3*x**2 - 6) * (3*x**2 - 2)
#     ),
#     (
#         6,
#         lambda x: (x**2 - 2) * (3*x**2 - 3) * (3*x**2 - 1)
#     ),
# ]

# alpha*(alpha*x**2 + 6) * (alpha*x**2 + 10) * (alpha*x**2 + 12)


for alpha, f in alpha_tests:
    for nmod in range(2, 1001):
        squares = set(
            i**2 % nmod
            for i in range(nmod)
        )

        # print(f"{nmod=} , {alpha=}")

        nmod_ok = True

        for x in range(nmod):
            if f(x) % nmod in squares:
                nmod_ok = False

                # print(f"    + Broken by {x=}")
                break

        if nmod_ok:
            print(f"{nmod=} / {alpha=} : {squares=}")
            break
