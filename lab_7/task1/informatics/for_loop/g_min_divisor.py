x = int(input())

for divisor in range(2, x + 1):
    if x % divisor == 0:
        print(divisor)
        break
