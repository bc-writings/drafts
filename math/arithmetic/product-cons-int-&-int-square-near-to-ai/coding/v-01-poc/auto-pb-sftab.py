K_MIN = 3
K_MAX = 8

#       KMAX <= 12: immediate
#       KMAX  = 13: slow, but acceptable
# 14 <= KMAX <= 15: too slow!
# 16 <= KMAX <= 17: extremly slow!
# 18? <= KMAX      : unusable

# PB MET...


from pprint import pprint

from common import *

print()
print (f"{K_MIN=} , {K_MAX=}")
print()

for k in range(K_MIN, K_MAX + 1):
    human_sloving = find_pb_sftabs(k)

    print(k, end=" ")

    if len(human_sloving) == 0:
        print("<---", end="")

    else:
        print ()
        print (f"{k = }")
        print ()
        pprint(human_sloving)
        print ()
        pprint(LOG)

        exit()


    print()


#  k = 9  via  sol(5) = [(3, 2)] et v_7(9!) = 1
#
#  [14, 1, 6, 5,   2  , 3, 1, 7, 10],
#  [10, 7, 1, 3,   2  , 5, 6, 1, 14],
