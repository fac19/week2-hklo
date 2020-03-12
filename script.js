// API URL's
let movieDB_URL = "https://api.themoviedb.org/3/movie/";
// hide an API key
let movieDB_key = config.movieDB_key;
// create a random number between 100-500 to limit database results ( arbitrarily )

function generateRandomNumber() {
  return Math.floor(Math.random() * (500 - 100 + 1)) + 100;
}
// initialize empty movie array to push movie object to
let movieArray = [];
// initialize accumulator array
let idArray = [];

// generate 4 random movie objects and push the into an array

async function generateMovies() {
  // fetch movies until array has 4 objects
  while (movieArray.length < 4) {
    let movieObj = {};
    let movieId = generateRandomNumber();
    // create new url on each iteration
    let requestURL = `${movieDB_URL}${movieId}${movieDB_key}`;
    // use try to catch API call errors
    try {
      // fetch movie using generated url
      let response = await fetch(requestURL);
      let movie = await response.json();

      if (
        // check if movie exists in the database ( checking response status code )
        movie.status_code !== 34 &&
        // make sure movie has a poster image
        movie.poster_path !== null &&
        // make sure there are no duplicates in the accumulator array (idArray)
        !idArray.includes(movie.id)
      ) {
        // create a movie object with specified keys
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

    document.querySelector(".board__figure--one").style.backgroundImage = `url(${movieArray[0].img})`;
    document.querySelector(".board__figure--two").style.backgroundImage = `url(${movieArray[1].img})`;
    document.querySelector(".board__figure--three").style.backgroundImage = `url(${movieArray[2].img})`;
    document.querySelector(".board__figure--four").style.backgroundImage = `url(${movieArray[3].img})`;
    document.querySelector(".board__caption--one").textContent = movieArray[0].title.toString();
    document.querySelector(".board__caption--two").textContent = movieArray[1].title.toString();
    document.querySelector(".board__caption--three").textContent = movieArray[2].title.toString();
    document.querySelector(".board__caption--four").textContent = movieArray[3].title.toString();

 }

generateMovies();
