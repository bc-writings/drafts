# Comment et pourquoi ?

# https://blogdemaths.wordpress.com/2013/02/02/un-critere-visuel-de-divisibilite-par-7/

GRAPHE = {
    str(i): c
    for i, c in enumerate("0362514")
}


ADD_MOD_7 = ['0123456012']

for m in range(1, 7):
    latsseq = ADD_MOD_7[0]

    ADD_MOD_7.append(latsseq[m:8] + latsseq[1:m+3])


ADD_MOD_7 = {
    str(m) : {
        str(d): d_plus_7
        for d, d_plus_7 in enumerate(s)
    }
    for m, s in enumerate(ADD_MOD_7)
}


def is_divisible_by_7(str_nb):
    assert type(str_nb) == str
    assert str_nb != ''

    modulo_7 = '0'

    while str_nb:
        leftdec = str_nb[0]

        modulo_7 = ADD_MOD_7[modulo_7][leftdec]
        modulo_7 = GRAPHE[modulo_7]

        str_nb = str_nb[1:]

    return modulo_7 == "0"


def test_list(onelist):
    count_div_by_7      = 0
    count_none_div_by_7 = 0

    for elt in onelist:
        if is_divisible_by_7(elt):
            count_div_by_7 += 1

        else:
            count_none_div_by_7 += 1

    return (count_div_by_7, count_none_div_by_7)


print("+ Tests à la main...")

assert is_divisible_by_7('7')    == True
assert is_divisible_by_7('28')   == True
assert is_divisible_by_7('14')   == True
assert is_divisible_by_7('50')   == False
assert is_divisible_by_7('630')  == True
assert is_divisible_by_7('631')  == False
assert is_divisible_by_7('5957') == True
assert is_divisible_by_7('5960') == False


print("+ Tests autos...")

multiples      = [str(7*i) for i in range(2,1429)]
none_multiples = [str(k) for k in range(10,10000) if k%7 != 0]

assert test_list(multiples)      == (1427,0)
assert test_list(none_multiples) == (0,8563)
