# N_MAX = 10**5
#
# winners     = [3, 9, 27, 81, 171, 243, 513, 729, 1539, 2187, 3249, 4617, 6561, 9747, 13203, 13851, 19683, 29241, 39609, 41553, 59049, 61731, 87723, 97641]
#
# winners / 3 = [1, 3, 9, 27, 57, 81, 171, 243, 513, 729, 1083, 1539, 2187, 3249, 4401, 4617, 6561, 9747, 13203, 13851, 19683, 20577, 29241, 32547]
#
# 57 = 3 * 19 mais pas 19 mais 3 quand même


print("Start.")

N_MAX = 7*10**5

winners = set()

for n in range(2, N_MAX):
    print(f'--- TESTING {n} ---')

    if (2**n + 1) % n != 0:
        print(f"KO.")

    else:
        winners.add(n//3)

print("End.")

print(f'WINNERS: {sorted(list(winners))}')
