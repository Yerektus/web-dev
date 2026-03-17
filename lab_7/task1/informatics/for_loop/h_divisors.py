x = int(input())

result = []

for divisor in range(1, x + 1):
    if x % divisor == 0:
        result.append(str(divisor))

print(" ".join(result))
