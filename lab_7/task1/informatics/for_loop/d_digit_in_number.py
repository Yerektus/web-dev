x = int(input())
d = int(input())

if x == 0:
    print(1 if d == 0 else 0)
else:
    count = 0

    for digit in str(x):
        if int(digit) == d:
            count += 1

    print(count)
