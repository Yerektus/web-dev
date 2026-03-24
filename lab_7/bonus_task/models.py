class Book:
    def __init__(self, title, author, book_id, is_available=True):
        self.title = title
        self.author = author
        self.book_id = str(book_id)
        self.is_available = is_available

    def borrow_book(self):
        if not self.is_available:
            return f"Book '{self.title}' is already borrowed."

        self.is_available = False
        return f"Book '{self.title}' has been borrowed successfully."

    def return_book(self):
        if self.is_available:
            return f"Book '{self.title}' is already in the library."

        self.is_available = True
        return f"Book '{self.title}' has been returned successfully."

    def matches_title(self, query):
        return query.lower() in self.title.lower()

    def availability_label(self):
        return "Available" if self.is_available else "Borrowed"

    def __str__(self):
        return (
            f"[{self.book_id}] {self.title} by {self.author} "
            f"- {self.availability_label()}"
        )


class EBook(Book):
    def __init__(self, title, author, book_id, file_size, file_format, is_available=True):
        super().__init__(title, author, book_id, is_available)
        self.file_size = file_size
        self.file_format = file_format

    def download_info(self):
        return (
            f"EBook '{self.title}' can be downloaded as "
            f"{self.file_format} ({self.file_size})."
        )

    def borrow_book(self):
        if not self.is_available:
            return f"EBook '{self.title}' is already borrowed."

        self.is_available = False
        return (
            f"EBook '{self.title}' has been borrowed successfully. "
            f"Download is now available."
        )

    def __str__(self):
        return (
            f"{super().__str__()} | Type: EBook | Format: {self.file_format} "
            f"| Size: {self.file_size}"
        )


class PrintedBook(Book):
    def __init__(self, title, author, book_id, pages, weight, is_available=True):
        super().__init__(title, author, book_id, is_available)
        self.pages = pages
        self.weight = weight

    def shelf_info(self):
        return (
            f"Printed book '{self.title}' has {self.pages} pages "
            f"and weighs {self.weight}."
        )

    def borrow_book(self):
        if not self.is_available:
            return f"Printed book '{self.title}' is already borrowed."

        self.is_available = False
        return (
            f"Printed book '{self.title}' has been borrowed successfully. "
            f"Please return it on time."
        )

    def __str__(self):
        return (
            f"{super().__str__()} | Type: PrintedBook | Pages: {self.pages} "
            f"| Weight: {self.weight}"
        )
