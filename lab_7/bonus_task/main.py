from models import Book, EBook, PrintedBook


def show_menu():
    print("\n===== Book System =====")
    print("1. Add Book")
    print("2. View All Books")
    print("3. Borrow Book")
    print("4. Return Book")
    print("5. Search Book by Title")
    print("6. Exit")


def find_book_by_id(books, book_id):
    for book in books:
        if book.book_id == book_id:
            return book
    return None


def add_book(books):
    book_type = input("Enter type (ebook/printed): ").strip().lower()
    title = input("Enter title: ").strip()
    author = input("Enter author: ").strip()
    book_id = input("Enter ID: ").strip()

    if find_book_by_id(books, book_id):
        print("A book with this ID already exists.")
        return

    if book_type == "ebook":
        file_size = input("Enter file size: ").strip()
        file_format = input("Enter format: ").strip()
        book = EBook(title, author, book_id, file_size, file_format)
    elif book_type in {"printed", "printedbook"}:
        pages = input("Enter number of pages: ").strip()
        weight = input("Enter weight: ").strip()
        book = PrintedBook(title, author, book_id, pages, weight)
    else:
        print("Invalid book type. Please choose ebook or printed.")
        return

    books.append(book)
    print("Book added successfully!")


def view_all_books(books):
    if not books:
        print("No books in the system yet.")
        return

    print("\nAll books:")
    for book in books:
        print(book)


def borrow_book(books):
    book_id = input("Enter book ID to borrow: ").strip()
    book = find_book_by_id(books, book_id)

    if not book:
        print("Book not found.")
        return

    print(book.borrow_book())


def return_book(books):
    book_id = input("Enter book ID to return: ").strip()
    book = find_book_by_id(books, book_id)

    if not book:
        print("Book not found.")
        return

    print(book.return_book())


def search_book_by_title(books):
    query = input("Enter title to search: ").strip()
    results = [book for book in books if book.matches_title(query)]

    if not results:
        print("No matching books found.")
        return

    print("\nMatching books:")
    for book in results:
        print(book)


def main():
    books = []

    while True:
        show_menu()
        choice = input("Enter choice: ").strip()

        if choice == "1":
            add_book(books)
        elif choice == "2":
            view_all_books(books)
        elif choice == "3":
            borrow_book(books)
        elif choice == "4":
            return_book(books)
        elif choice == "5":
            search_book_by_title(books)
        elif choice == "6":
            print("Exiting the program. Goodbye!")
            break
        else:
            print("Invalid choice. Please enter a number from 1 to 6.")


if __name__ == "__main__":
    main()
