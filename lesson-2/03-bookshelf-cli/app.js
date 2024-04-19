import { program } from "commander";

import Books from './books/index.js';

async function invokeAction({ action, title, id, author }) {
    switch (action) {
        case "getAll":
            const books = await Books.getBooks();
            return books;
            //Як і домашньому завданні
            // console.log(books);
            // break;
        case "getById":
            const book = await Books.getBook(id);
            return book;
        case "create":
            const createBook = await Books.createBook({ title, author });
            return createBook;
        case "update":
            const update = await Books.updateBook(id, { title, author });
            return updateBook;
        case "remove":
            const remove = await Books.removeBook(id);
            return removeBook;
        default:
            return "unknow action!";
    }
}

program
    .option("-a, --action <action>", "Action to invoke")
    .option("-i, --id <id>", "Book id")
    .option("-t, --title <title>", "Book title")
    .option("-at, --author <author>", "Book author");

program.parse(process.argv);

// console.log(program.opts());

invokeAction(program.opts()).then(console.log).catch(console.error);