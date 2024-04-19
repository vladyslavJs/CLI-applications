//щоб працювали модулі ES6 в Node.js треба добавити в package.json - "type": "module",


Як розібратися з абсолютним шляхом в Node.js ES6 module :

const filePath = path.resolve("books", "books.json");

path.resolve повертає абсолютний шлях з того місця де ми викликаємо команду node, команду node ми будемо викликати в корені 03-bookshelf-cli, тому маємо додати папочку 'books' і до неї добавити дані з книгами, 'books.json'