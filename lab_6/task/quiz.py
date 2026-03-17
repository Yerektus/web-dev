from data import question_data
from question import Question


class Quiz:
    def __init__(self):
        self.questions: list[Question] = [Question(d) for d in question_data]
        self.score: int = 0
        self._current: int = 0

    @property
    def total(self) -> int:
        return len(self.questions)

    @property
    def has_next(self) -> bool:
        return self._current < self.total

    def next_question(self) -> None:
        question = self.questions[self._current]
        self._current += 1

        question.display(self._current)

        answer = self._prompt_answer(question)

        if question.is_correct(answer):
            self.score += 1
            print(f"  Correct! Score: {self.score}/{self._current}")
        else:
            print(
                f"  Wrong! The correct answer was: {question.confirm}. "
                f"Score: {self.score}/{self._current}"
            )

    def run(self) -> None:
        print("=" * 40)
        print("       Welcome to the Quiz Game!")
        print("=" * 40)

        while self.has_next:
            self.next_question()

        self._show_result()

    def _prompt_answer(self, question: Question) -> str:
        while True:
            raw = input("  Your answer (text or index number): ").strip()
            if not raw:
                print("  Please enter an answer.")
                continue

            if raw.isdigit():
                idx = int(raw)
                if 0 <= idx < len(question.index):
                    return question.index[idx]
                print(f"  Index out of range. Choose 0–{len(question.index) - 1}.")
            else:
                return raw

    def _show_result(self) -> None:
        percentage = (self.score / self.total) * 100
        print("\n" + "=" * 40)
        print(f"Quiz finished! Final score: {self.score}/{self.total} ({percentage:.0f}%)")
        if percentage == 100:
            print("Perfect score! Excellent!")
        elif percentage >= 70:
            print("Good job! Well done.")
        elif percentage >= 40:
            print("Not bad. Keep practising!")
        else:
            print("Better luck next time!")
        print("=" * 40)

if __name__ == "__main__":
    quiz = Quiz()
    quiz.run()
