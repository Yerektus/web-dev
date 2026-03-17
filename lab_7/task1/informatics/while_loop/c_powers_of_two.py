n = int(input())
value = 1
result = []

while value <= n:
    result.append(str(value))
    value *= 2

print(" ".join(result))
