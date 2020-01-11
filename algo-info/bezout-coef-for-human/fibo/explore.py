F = FF = 1

fibos = [F, FF]

for _ in range(22):
    F, FF = FF, F + FF

    fibos.append(FF)


for n, Fn in enumerate(fibos):
    print(f"\n    $F_{{{n}}} = {Fn}$")
