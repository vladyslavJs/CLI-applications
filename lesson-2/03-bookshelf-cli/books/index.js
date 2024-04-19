import * as fs from 'node:fs/promises';
import { type } from 'node:os';
import path from 'node:path';
import crypto from 'node:crypto';
import { write } from 'node:fs';

const filePath = path.resolve("books", "books.json");

async function readBooks() {
    const data = await fs.readFile(filePath, { encoding: "utf-8" });

    //використовується для того, щоб розпарсити рядок data, який містить дані у форматі JSON, і перетворити його в об'єкт JavaScript.
    return JSON.parse(data);
    // console.log(typeof data);
}

//Цей код використовує функцію readBooks(), яка повертає об'єкт Promise, що представляє результат асинхронної операції зчитування книг. Після успішного виконання операції (коли книги були успішно зчитані), функція then() викликає обробник, переданий їй в якості аргументу.
// readBooks().then((books) => console.log(books));
/* _____________________*/

//Ця функція writeBooks(books) використовує метод writeFile з модуля fs для запису списку книг у файл у форматі JSON.
function writeBooks(books) {
    return fs.writeFile(filePath, JSON.stringify(books, undefined, 2))
}

//викликаємо метод
// writeBooks([{ id: '1', title: 'Title1', author: 'Author1' }]);

//доступ до книг
async function getBooks() {
    const books = await readBooks();

    return books;
}

//доступ до книг по id
async function getBook(id) {
    const books = await readBooks();

    const book = books.find((book) => book.id === id);

    if (typeof book === "undefined") {
        return null;
    }
    return book;
}

//створення книги
async function createBook(book) {
    const books = await readBooks();

    //генерування id створеної книжки
    const newBook = { ...book, id: crypto.randomUUID() };

    books.push(newBook);

    await writeBooks(books);

    return newBook;
}

async function updateBook() {
    const books = await readBooks();

    const index = books.findIndex((book) => book.id === id);

    if (index === -1) {
        return null;
    }

    const updateBook = {...book, id}

    //React підхід
    // const newBooks = [
    //     ...books.slice(0, index),
    //     { ...book, id },
    //     ...book.slice(index + 1)
    // ];

    // await writeBooks(newBooks);

    books[index] = updateBook;

    await writeBooks(books)

    return updateBook;
}

async function removeBook() {
    const books = readBooks();

    const index = books.findIndex((book) => book.id === id);

    if (index === -1) {
        return null;
    }

    const removeBook = books[index];
    //React підхід
    // const newBooks = [...books.slice(0, index), ...books.slice(index + 1)];

    // await writeBooks(newBooks);

    books.splice(index, 1);

    await writeBooks(books);

    return removeBook;
}

export default{
    getBooks,
    getBook,
    createBook,
    updateBook,
    removeBook
};