

let numberOfFilms;


// console.log(numberOfFilms);

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
  start: function() {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже просмотрели', '');

    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count= +prompt('Сколько фильмов вы уже просмотрели', '');
    }
  },
  
  //  for() method ==================================================================================
  rememberMyFilms: function() {
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
  },
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
  detectPersonalLevel: function() {
    if (personalMovieDB.count < 10) {
      console.log("Просмотрено мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
      console.log("Вы киноман");
    } else {
      console.log("Произошла ошибка");
    }
  },
  writeYourGenres: function() {
    // for (let i = 0; i < 3; i++) {
  
    //   let genre = prompt(`Ваш любимы жанр под номером ${i + 1}`);
      
    //   if (genre === null || genre === '') {
    //     console.log('no added genre');
    //     i--;
    //   } else {
    //     personalMovieDB.genres[i] = genre;
    //   }
    // }

    for (let i = 0; i < 1; i++) {

      let addGenres = prompt('Введите жанры через запятую').toLocaleLowerCase();

      if (addGenres === null || addGenres === '') {
            console.log('no added genre');
            i--;
      } else {
        personalMovieDB.genres = addGenres.split(', ');
        personalMovieDB.genres.sort();
      }       


    }

    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр #${i + 1} - это ${item}`);
    });
  },
  showMyDB: function(hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleMyVisibleDB: function() {
    if (personalMovieDB.private) {
      personalMovieDB.private = false;
    } else {
      personalMovieDB.private = true;
    }
  }
};






personalMovieDB.start();


personalMovieDB.rememberMyFilms();

personalMovieDB.detectPersonalLevel();

personalMovieDB.writeYourGenres();

personalMovieDB.showMyDB(personalMovieDB.private);

personalMovieDB.toggleMyVisibleDB();






