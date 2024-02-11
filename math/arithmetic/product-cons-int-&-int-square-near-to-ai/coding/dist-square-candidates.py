from collections import defaultdict
from math        import sqrt, floor

def sol(diff):
    solfound = []

    for i in range(1, (diff + 1) // 2 + 1):
        tested = i**2 - diff

        if tested < 0:
            continue

        tested = floor(sqrt(i**2 - diff))

        if tested == 0:
            continue

        if tested**2 == i**2 - diff:
            solfound.append((i, tested))

    return solfound



print(sol(5))

exit()

# all_nbsol = defaultdict(list)

# for d in range(1, 101):
#     all_nbsol[len(sol(d))].append(str(d))

# for k, v in all_nbsol.items():
#     print(f"{k}: {', '.join(v)}")



for d in range(1, 101):
    sol_d = sol(d)
    if len(sol_d) == 1:
        if min(sol_d[0]) == 1:
            print(d, sol_d)



# for d in range(1, 101):
#     print(f"{d=} , {sol(d)=}")


# maxsol    = 0
# max_1st_d = 0

# for d in range(1, 10**4):
#     nbsol = len(sol(d))

#     if nbsol > maxsol:
#         maxsol    = nbsol
#         max_1st_d = d

# print(f"{maxsol=} pour d={max_1st_d}")
