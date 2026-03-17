n = int(input())
number = 1
result = []

while number * number <= n:
    result.append(str(number * number))
    number += 1

print(" ".join(result))
