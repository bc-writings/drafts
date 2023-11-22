QUINTE = [1, 2, 3, 4, 5]

def newpossibilities(horses):
    if len(horses) == 1:
        return [horses]

    answer = []

    for nb in range(len(horses)):
        firsthorse = horses[nb]

        for subunsortedhorses in newpossibilities(
            horses[:nb] + horses[nb+1:]
        ):
            answer += [[firsthorse] + subunsortedhorses]

    return answer


allquintes = newpossibilities(QUINTE)

for i, onequinté in enumerate(allquintes):
    print(onequinté)

    if i > 0 and i % 10 == 0:
        input(">>> Taper une touche.")
