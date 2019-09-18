from math import gcd

a, b = 141, 27

if a < b:
	a, b = b, a

a_0, b_0 = a, b

u, uu = 1, 0
v, vv = 0, 1

while b != 0:
	print(f"u = {u:<10} v ={v}")

	q, r = a // b, a%b

	u, uu = uu, u - q*uu
	v, vv = vv, v - q*vv

	a, b = b, r

print(f"u = {u:<10} v ={v}")

print('---')
print(f"{u}*{a_0} + {v}*{b_0} = {u*a_0 + v*b_0}")
print(f"pgcd({a_0} ; {b_0}) = {gcd(a_0, b_0)}")
