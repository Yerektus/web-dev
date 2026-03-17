numbers = list(map(int, input().split()))

for index in range(1, len(numbers)):
    if numbers[index - 1] * numbers[index] > 0:
        print(numbers[index - 1], numbers[index])
        break
