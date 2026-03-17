def power(a, n):
    result = 1.0

    for _ in range(n):
        result *= a

    return result


a, n = input().split()
value = power(float(a), int(n))

if value.is_integer():
    print(int(value))
else:
    print(value)
