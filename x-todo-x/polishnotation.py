# Source:
# https://medium.com/@sebawitowski/creating-magic-functions-in-ipython-part-1-d1882c3db6ec

calc = "* - 7 4 2"

ope = {
    "+": lambda x, y: x + y,
    "-": lambda x, y: x - y,
    "*": lambda x, y: x * y,
}

def interpret(tokens, desc = "init"):
    print('',  f'--- {desc} ---', tokens, sep="\n")
    token = tokens.pop(0)
    print('  >', token)
    print('  >', tokens)
    if token in ["+", "-", "*"]:
        print('  > ope')
        return ope[token](
            interpret(tokens, desc = "left"),
            interpret(tokens, desc = "right")
        )

    print('  > int')
    return int(token)


print(interpret(calc.split()))
