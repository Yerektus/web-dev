def min_of_four(a, b, c, d):
    result = a

    if b < result:
        result = b
    if c < result:
        result = c
    if d < result:
        result = d

    return result


a, b, c, d = map(int, input().split())
print(min_of_four(a, b, c, d))
