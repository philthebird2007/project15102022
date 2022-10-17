let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
      numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели', '');
    }
}

start();

// console.log(numberOfFilms);

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};

//  for() method ==================================================================================



function rememberMyFilms() {
      for (let i = 0; i < 2; i++) {
        const a = prompt('Один из просмотренных фильмов', ''),
              b = prompt('На сколько оцените его', '');
      
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
         personalMovieDB.movies[a] = b;
         console.log('done');
        } else {
        console.log('error');
        i--;
        }
    }
}

// rememberMyFilms();


// while method ===============================================================================

// let i = 0;      
// while (i < 2) {
//   const a = prompt('Один из просмотренных фильмов', ''),
//         b = prompt('На сколько оцените его', '');
        
//   if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     i++;
//     console.log('done');
//   }
//   else {
//     console.log('error');
//     i--;
//   }
// }

// do while method ===============================================================================

// let i = 0;
// do {
//   const a = prompt('Один из просмотренных фильмов', ''),
//         b = prompt('На сколько оцените его', '');
  
//   if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//       personalMovieDB.movies[a] = b;
//       i++;
//       console.log('done');
//     }
//     else {
//       console.log('error');
//       i--;
//     }      
// }
// while (i < 2);



function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
}

// detectPersonalLevel();

function writeYourGenres() {
  for (let i = 0; i < 3; i++) {
    // Можно так
    // const genre = prompt(`Ваш любимы жанр под номером ${i + 1}`);
    // console.log(personalMovieDB.genres[i] = genre);
    // А можно и без переменной genre
    personalMovieDB.genres[i] = prompt(`Ваш любимы жанр под номером ${i + 1}`);

  }
}

writeYourGenres();

function showMyDB (hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.private);






