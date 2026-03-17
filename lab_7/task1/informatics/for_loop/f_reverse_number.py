x = input().strip()

result = ""

for digit in x:
    result = digit + result

print(int(result))
