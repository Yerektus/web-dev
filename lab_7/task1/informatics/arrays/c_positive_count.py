numbers = list(map(int, input().split()))

print(sum(1 for number in numbers if number > 0))
