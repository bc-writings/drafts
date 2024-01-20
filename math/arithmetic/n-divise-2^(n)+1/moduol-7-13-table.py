p = 7

results = [
    2**k % p
    for k in range(0, p)
]

print(
    " & ".join(
        f"{r}"
        for r in results
    )
)
