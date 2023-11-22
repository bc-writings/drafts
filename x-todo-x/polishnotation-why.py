# Source:
# https://medium.com/@sebawitowski/creating-magic-functions-in-ipython-part-1-d1882c3db6ec

calc = "* - 7 4 2"
calc = "+ 1 * 3 2"

ope = {
    "+": lambda x, y: x + y,
    "-": lambda x, y: x - y,
    "*": lambda x, y: x * y,
}

tokens = calc.split()


def interpret():
    token = tokens.pop(0)
    if token in ["+", "-", "*"]:
        return ope[token](interpret(), interpret())

    return int(token)


print(interpret())
