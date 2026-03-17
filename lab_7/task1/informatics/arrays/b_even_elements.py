numbers = list(map(int, input().split()))

print(*[number for number in numbers if number % 2 == 0])
