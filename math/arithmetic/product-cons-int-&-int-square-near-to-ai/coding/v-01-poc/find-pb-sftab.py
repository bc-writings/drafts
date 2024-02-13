K = 4

from common import *

human_sloving = find_pb_sftabs(K)

print(f"{K=}")
print()
print(f"{len(set(tuple(x) for x in human_sloving))=}")

from pprint import pprint

pprint(LOG)
pprint(human_sloving)
