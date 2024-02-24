from math import sqrt, floor


def distsquares(diff_squares):
    solfound = []

    for N in range(1, (diff_squares + 1) // 2 + 1):
        M_square = N**2 - diff_squares

        if M_square > 0:
            M = floor(sqrt(M_square))

            if M != 0 and M**2 == M_square:
                solfound.append((M, N))

    return solfound


print(distsquares(5))
