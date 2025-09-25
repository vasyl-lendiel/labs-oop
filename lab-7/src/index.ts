import { Book } from "./book/book";
import { BookUtil } from "./book/book.util";

async function main() {
    const library: Book[] = [
        new Book("Гоголь", "Мертві душі"),
        new Book("Кафка", "Процес"),
        new Book("Лермонтов", "Герой нашого часу"),
        new Book("Пушкін", "Євгеній Онєгін"),
        new Book("Толстой", "Війна і мир"),
        new Book("Островський", "Гроза"),
        new Book("Шевченко", "Кобзар"),
        new Book("Достоєвський", "Злочин і кара"),
        new Book("Тургенєв", "Батьки і діти"),
    ];

    console.log("=== Список книг у бібліотеці ===");
    BookUtil.printBookInfo(library);

    console.log("\n=== Пошук книг за автором 'Гоголь' ===");
    const booksByGogol = BookUtil.findBooksByAuthor(library, "Гоголь");
    BookUtil.printBookInfo(booksByGogol);

    console.log("\n=== Пошук книг за назвою 'Кобзар' ===");
    const booksTitledKobzar = BookUtil.findBooksByTitle(library, "Кобзар");
    BookUtil.printBookInfo(booksTitledKobzar);

    console.log("\n=== Додавання нової книги ===");
    const newBook = new Book("Шевченко", "Нова книга");
    BookUtil.addBook(library, newBook);
    BookUtil.printBookInfo(library);

    console.log("\n=== Видалення книги з назвою 'Кафка' ===");
    const updatedLibrary = BookUtil.removeBook(library, "Кафка");
    BookUtil.printBookInfo(updatedLibrary);
}

main().catch(console.error);
