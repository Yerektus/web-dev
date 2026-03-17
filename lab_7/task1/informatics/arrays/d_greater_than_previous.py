numbers = list(map(int, input().split()))
result = []

for index in range(1, len(numbers)):
    if numbers[index] > numbers[index - 1]:
        result.append(str(numbers[index]))

print(" ".join(result))
