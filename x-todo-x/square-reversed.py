def reverseit(i, intify = True):
    i = [d for d in str(i)]
    i = i[::-1]
    i = "".join(i)

    if intify:
        i = int(i)

    return i


def aresym(i, j):
    i = str(i)
    j = str(j)

    len_i = len(i)
    len_j = len(j)

    maxlen = max(len_i, len_j)

    if len_i < maxlen:
        i = "0"*(maxlen - len_i) + i

    elif len_j < maxlen:
        j = "0"*(maxlen - len_j) + j

    return i == reverseit(j, intify = False)


print(f"2021**2 = {2021**2} et 1202**2 = {1202**2}")

for i in range(1, 10**10):
    sqr_i = i**2

    i_rev = reverseit(i)

    if i == i_rev:
        continue

    sqr_i_rev = i_rev**2

#     if not aresym(sqr_i, sqr_i_rev) \
#     and not set(str(i)) <= set("0123"):
#         print(f"""
# ----
# PB !
# ----
#
# i_rev    = {i}
# i_rev    = {i_rev}
#
# i**2     = {sqr_i}
# i_rev**2 = {sqr_i_rev}
#         """)
#
#         exit()


    if aresym(sqr_i, sqr_i_rev) \
    and not set(str(i)) <= set("0123"):
        print(f"""
---------
EXCEPTION
---------

i_rev    = {i}
i_rev    = {i_rev}

i**2     = {sqr_i}
i_rev**2 = {sqr_i_rev}
    """)

        exit()
