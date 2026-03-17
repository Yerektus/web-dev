numbers = list(map(int, input().split()))
count = 0

for index in range(1, len(numbers) - 1):
    if numbers[index] > numbers[index - 1] and numbers[index] > numbers[index + 1]:
        count += 1

print(count)
