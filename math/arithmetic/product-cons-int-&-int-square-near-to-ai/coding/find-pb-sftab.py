K = 6

from common import *

human_sloving = find_pb_sftabs(K)

print(f"{len(set(tuple(x) for x in human_sloving))=}")


from pprint import pprint

pprint(LOG)

pprint(human_sloving)
