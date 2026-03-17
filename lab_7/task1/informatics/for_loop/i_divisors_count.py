import math


x = int(input())
count = 0

for divisor in range(1, math.isqrt(x) + 1):
    if x % divisor == 0:
        count += 1 if divisor * divisor == x else 2

print(count)
