// API URL's
let movieDB_URL = "https://api.themoviedb.org/3/movie/";
let movieDB_key = config.movieDB_key;

// create a random number between 100-500

function generateRandomNumber() {
  return Math.floor(Math.random() * (500 - 100 + 1)) + 100;
}

let movieArray = [];
let idArray = [];

// generate 4 random movie objects and push the into an array

async function generateMovies() {
  // fetch movies until array has 4 objects
  while (movieArray.length < 4) {
    let movieObj = {};
    let movieId = generateRandomNumber();
    // create new url on each iteration
    let requestURL = `${movieDB_URL}${movieId}${movieDB_key}`;

    try {
      // fetch movie using generated url
      let response = await fetch(requestURL);
      let movie = await response.json();
      // check if movie exists in the database ( checking response status code )
      if (
        movie.status_code !== 34 &&
        movie.poster_path !== null &&
        !idArray.includes(movie.id)
      ) {
        idArray.push(movie.id);
        movieObj.id = movie.id;
        movieObj.img = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
        movieObj.title = movie.title;
        movieArray.push(movieObj);
      }
    } catch (err) {
      // catches errors both in fetch and response.json
      alert("Something's gone wrong, please try again");
    }
  }

  console.log(movieArray);

  // create new movie obj with with title, image and id

  // if not in movie array, push it in
}

generateMovies();
