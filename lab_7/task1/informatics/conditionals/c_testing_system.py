correct_answer = int(input())
student_answer = int(input())

is_correct = (correct_answer == 1 and student_answer == 1) or (
    correct_answer != 1 and student_answer != 1
)

print("YES" if is_correct else "NO")
