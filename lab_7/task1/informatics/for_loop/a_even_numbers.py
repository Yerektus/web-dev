a = int(input())
b = int(input())

result = []
start = a if a % 2 == 0 else a + 1

for number in range(start, b + 1, 2):
    result.append(str(number))

print(" ".join(result))
