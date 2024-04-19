const movies = require("./movies");

//виклик іменнованого експорту
movies
    .readMovies()
    .then((data) => console.log(data))
    .catch((error) => console.log(error));


//виклик дефолтного експорту
// movies()
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));   