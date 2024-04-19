const { log } = require("node:console");
const fs = require("node:fs/promises");
const path = require("node:path");

async function readMovies() {
    //створення шляхів методом node:path. Він приймає частинки шляху та об'єднує в один
    const filePath = path.join(__dirname, 'movies.txt');

    // console.log(`${__dirname}/movies.txt`);
    console.log(filePath);
    const data = await fs.readFile(filePath, { encoding: "utf-8" });

    return data;
}

// аналог іменного експорту
module.exports = {
    readMovies,
};

// аналог дефолтного експорту
// module.exports = readMovies;
