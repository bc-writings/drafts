import math

max = 1500

targets_found = {}

for n in range(1, max + 1):
    for k in range(1, n + 1):
        c = math.comb(n, k)

        if c == 1:
            continue

        exa = f"combi({n}, {k}) = {c}"

        if c in targets_found:
            targets_found[c]['occu'] += 1
            targets_found[c]['examples'].append(exa)

        else:
            targets_found[c] = {
                'occu'    : 1,
                'examples': [exa]
            }

for c, infos in targets_found.items():
    if infos['occu'] > 4:
        print('---')
        print(f"{c} found {infos['occu']} times.")
        print('')
        print('    +', '\n    + '.join(infos['examples']))
