print("Start.")

for k in range (20):
    n = 3**k

    if (2**n + 1) % n != 0:
        print(f"KO withh {n}.")

print("End.")
