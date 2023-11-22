def allval(prof):
    if prof == 0:
        return {0}

    vals    = set()
    subvals = allval(prof - 1)

    for i in range(10):
        if prof % 2 == 0:
            S = 2*i

        else:
            S = i

        for sub in subvals:
            vals.add((sub + S) % 10)

    return vals




print(allval(12))
