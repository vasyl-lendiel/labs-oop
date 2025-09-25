import { Book } from "./book";

export class BookUtil {
    
    public static printBookInfo(books: Book[]): void {
        books.forEach(book => {
            console.log(`Title: ${book.title}, Author: ${book.author}`);
        });
    }

    public static findBooksByAuthor(books: Book[], author: string): Book[] {
        return books.filter(book => book.author === author);
    }

    public static findBooksByTitle(books: Book[], title: string): Book[] {
        return books.filter(book => book.title === title);
    }

    public static addBook(books: Book[], newBook: Book): void {
        books.push(newBook);
    }

    public static removeBook(books: Book[], title: string): Book[] {
        return books.filter(book => book.title !== title);
    }
}