#!/usr/bin/env python3

from re import X
from typing import *

from itertools import combinations


NB_MAX_WEIGHT = 3 # Avec 2, 3, 5, 10 et 20 on y arrive.

WEIGHT_MIN = 1
WEIGHT_MAX = 3



def testforpart(
    part: List[int]
) -> List[callable]:
# x =?= somme de poids
# x + somme de poids =?= somme de poids
#
# A la place de =?= , on peut aussi tester < et >.

# Partitions à gauche éventuellement et partition à droite.
    rightparts = []
    leftparts  = []

    for i in range(0, len(part) + 1):
        for onecombi in combinations(part, i):
            right_subpart = list(onecombi)

            if (
                right_subpart
                and
                not right_subpart in rightparts
            ):
                rightparts.append(right_subpart)

                left_subpart = part[:]

                for x in right_subpart:
                    left_subpart.pop(
                        left_subpart.index(x)
                    )

                leftparts.append(left_subpart)

# Faisons nos trois familles de tests.
    tests = []

    for i, right_subpart in enumerate(rightparts):
        left_subpart = leftparts[i]

        sumright = sum(right_subpart)
        sumleft  = sum(left_subpart)

        for compa in ['==', '<', '>']:
            testexpr = f"lambda x: x {compa} {sumright}"

            if testexpr not in tests:
                tests.append(testexpr)

            if sumleft:
                testexpr = f"lambda x: x + {sumleft} {compa} {sumright}"

                if testexpr not in tests:
                    tests.append(testexpr)

    return tests


def sign(
    n    : int,
    tests: List[callable]
) -> Set[bool]:
    ...






def isgoodpart(onepart: List[int]) -> bool:
    allsignsfound = []

    teststouse = testforpart(onepart)

    for t in teststouse:
        print(t)

    exit()

    for n in range(WEIGHT_MIN, WEIGHT_MAX + 1):
        signfound = sign(n, teststouse)

        if signfound in allsignsfound:
            return False

        allsignsfound.append(signfound)

    return True


def build_parts(nb_weight: int) -> List[int]:
    if nb_weight == 1:
        return [
            [i]
            for i in range(WEIGHT_MIN, WEIGHT_MAX + 1)
        ]

    parts = []

    for i in range(WEIGHT_MIN, WEIGHT_MAX + 1):
        for subpart in build_parts(nb_weight - 1):
            extended_subpart = [i] + subpart
            extended_subpart.sort()

            if not extended_subpart in parts:
                parts.append(extended_subpart)

    return parts



def search() -> List[int]:
    return [
        p
        for p in build_parts(NB_MAX_WEIGHT)
        if isgoodpart(p)
    ]



def builddecompo(onepart: List[int]) -> None:
    ...

def decompo(onepart: List[int]) -> None:
    ...



for sol in search():
    print(sol)
