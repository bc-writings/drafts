from random import randint
import re

DETERM_TEST_POWER = 6
RAND_TEST_POWER   = 6
RAND_SIZE_POWER   = 30

pattern = re.compile(
    "^("
        "[0369]"
        "|"
        "([258][0369]*[147])"
        "|"
        "("
            "([147]|[258][0369]*[258])"
            "([0369]|[147][0369]*[258])*"
            "([258]|[147][0369]*[147])"
        ")"
    ")+$"
)


def test_pattern(val):
    str_val = str(val)

    regmatch  = re.match(pattern, str_val)
    val_mod_3 = val % 3

    if regmatch and val_mod_3 != 0:
        print(f'  [[FAUX POSITIF]] --> i = {val}')
        exit()

    elif not regmatch and val_mod_3 == 0:
        print(f'  [[FAUX NÉGATIF]]] --> i = {val}')
        exit()


print(f"TESTS SYSTÉMATIQUES 10**{DETERM_TEST_POWER} - DÉBUT")

for i in range(10**DETERM_TEST_POWER):
    test_pattern(i)

print(f"TESTS SYSTÉMATIQUES 10**{DETERM_TEST_POWER} - FIN")


print(
    f"TESTS RANDOMISÉS 10**{RAND_TEST_POWER}"
    f" - NBRES <= 10**{RAND_SIZE_POWER} - DÉBUT"
)

for i in range(10**RAND_TEST_POWER):
    test_pattern(randint(1, 10**RAND_SIZE_POWER))

print(
    f"TESTS RANDOMISÉS 10**{RAND_TEST_POWER}"
    f" - NBRES <= 10**{RAND_SIZE_POWER} - FIN"
)
