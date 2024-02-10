K_MAX = 100
K_MIN = 8

from common import *

for k in range(K_MIN, K_MAX + 1):
    human_sloving = find_pb_sftabs(k)

    if len(human_sloving) != 0:
        from pprint import pprint

        print ()
        print (f"{k = }")
        print ()
        pprint(human_sloving)
        print ()
        pprint(LOG)

        exit()
