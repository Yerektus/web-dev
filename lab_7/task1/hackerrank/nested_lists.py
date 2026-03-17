students = []

for _ in range(int(input().strip())):
    name = input().strip()
    score = float(input().strip())
    students.append([name, score])

second_lowest = sorted({score for _, score in students})[1]
names = sorted(name for name, score in students if score == second_lowest)

for name in names:
    print(name)
