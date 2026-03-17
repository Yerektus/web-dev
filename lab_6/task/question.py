class Question:
    def __init__(self, data: dict):
        self.qt: str = data["qt"]
        self.confirm: str = data["confirm"]
        self.index: list[str] = data["index"]

    def is_correct(self, answer: str) -> bool:
        return answer.strip() == self.confirm

    def display(self, number: int) -> None:
        print(f"\nQ{number}: {self.qt}")
        for i, option in enumerate(self.index):
            print(f"  {i}) {option}")
