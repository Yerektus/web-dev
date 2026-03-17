import math


a = int(input())
b = int(input())

result = []
left = max(a, 0)
start = math.isqrt(left)

if start * start < left:
    start += 1

finish = math.isqrt(b) if b >= 0 else -1

for root in range(start, finish + 1):
    result.append(str(root * root))

print(" ".join(result))
