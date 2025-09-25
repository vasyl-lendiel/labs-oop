import Book from "./book/book";

async function main() {
    const library: Book = new Book();

    library.listBooks();

    console.log("\n=== Пошук книги за автором 'Гоголь' ===");
    const book1 = library.getBookByAuthor("Гоголь");
    
    if (book1) {
        console.log(`Знайдена книга: "${book1}"`);
    }

    library.addBook("Пушкін", "Євгеній Онєгін");
    library.removeBook("Кафка");
    library.listBooks();
}

main().catch(console.error);
