// API URL's
let movieDB_URL = "https://api.themoviedb.org/3/movie/";
let giphy_URL = "https://api.giphy.com/v1/gifs/search?api_key=";

// lbwQZXxYMqPh2DpvV8nXbGlqHNm8kJ9h&q=basic-instinct&limit=1&offset=0&rating=G&lang=en

// hide an API key
let movieDB_key = config.movieDB_key;
let giphy_key = config.giphy_key;
// create a random number between 100-500 to limit database results ( arbitrarily )

function generateRandomNumber(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
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
    let movieId = generateRandomNumber(500, 100);
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
        // push movieObj into moviearray
        movieArray.push(movieObj);
      }
    } catch (err) {
      // catches errors both in fetch and response.json
      alert("Something's gone wrong, please try again");
    }
  }
  console.log(movieArray);
}
// choose random movie from the array and replace white spaces in the title with hyphen
function moviePicker() {
  let randomIndex = generateRandomNumber(3, 0);
  let movieTitle = movieArray[randomIndex].title;

  movieTitle = movieTitle.replace(/[.,\/#!$%\^&\*;:{}=\_`~(),\s ]/g, " ");
  movieTitle = movieTitle.replace(/ /g, "-").toLowerCase();

  // generate request URL
  let requestURL = `${giphy_URL}${giphy_key}&q=${movieTitle}&limit=1&offset=0&rating=G&lang=en`;

  return requestURL;
}

async function generateGif() {
  // fetch gif with a specic title
  let requestURL = moviePicker();

  try {
    // fetch movie using generated url
    let response = await fetch(requestURL);
    let gif = await response.json();
    let gifURL = gif.data[0].images.downsized_large.url;
  } catch (err) {
    // catches errors both in fetch and response.json
    alert("Something's gone wrong, please try again");
  }

  return gifURL;
}

// generateGif function needs to be called AFTER generateMovies
generateMovies().then(generateGif);
