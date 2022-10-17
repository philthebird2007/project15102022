const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели', '');

console.log(numberOfFilms);

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};

//  for() method ==================================================================================

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

if (personalMovieDB.count < 10) {
  console.log("Просмотрено мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
  console.log("Вы киноман");
} else {
  console.log("Произошла ошибка");
}

console.log(personalMovieDB);





