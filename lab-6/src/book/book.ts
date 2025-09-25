
export default class Book {
    private booksMap: Map<string, string>;

    constructor() {
        this.booksMap = new Map<string, string>();
        this.booksMap.set("Шевченко", "Кобзар");
        this.booksMap.set("Франко", "Захар Беркут");
        this.booksMap.set("Леся Українка", "Лісова пісня");
        this.booksMap.set("Коцюбинський", "Тіні забутих предків");
        this.booksMap.set("Гоголь", "Вій");
        this.booksMap.set("Булгаков", "Майстер і Маргарита");
        this.booksMap.set("Достоєвський", "Злочин і кара");
        this.booksMap.set("Толстой", "Війна і мир");
        this.booksMap.set("Кафка", "Перевтілення");
        this.booksMap.set("Гемінґвей", "Старий і море");
    }

    public getBookByAuthor(author: string): string | undefined {
        const book = this.booksMap.get(author);
        if (book) {
            return book;
        } else {
            console.log(`Книга автора ${author} не знайдена.`);
            return undefined;
        }
    }

    public addBook(author: string, title: string): void {
        if (this.booksMap.has(author)) {
            console.log(`Книга автора ${author} вже існує.`);
        } else {
            this.booksMap.set(author, title);
            console.log(`Додано книгу "${title}" автора ${author}.`);
        }
    }

    public removeBook(author: string): void {
        if (this.booksMap.has(author)) {
            this.booksMap.delete(author);
            console.log(`Видалено книгу автора ${author}.`);
        } else {
            console.log(`Книга автора ${author} не знайдена.`);
        }
    }

    public listBooks(): void {
        console.log("Список книг у бібліотеці:");
        this.booksMap.forEach((title, author) => {
            console.log(`- "${title}" автора ${author}`);
        });
    }
}