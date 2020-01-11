MAX = 10**5

F = FF = 1

fibos = [FF]

for _ in range(MAX):
    F, FF = FF, F + FF

    fibos.append(FF)


print("DÉBUT DU TEST !")

for i in range(len(fibos)-5):
    if fibos[5+i] <= 10*fibos[i]:
        print(f"[ÉCHEC] i = {i}  ;  F_{{{i}}} = {fibos[i]}  ;  F_{{{5+i}}} = {fibos[5+i]}")


print("TEST FINI !")
