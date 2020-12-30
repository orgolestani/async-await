// global vars
// 43a5918249125a7b6e629912e70cc0a9
// https://api.themoviedb.org/3/search/movie?api_key=43a5918249125a7b6e629912e70cc0a9&query=blade
const apiKey = "43a5918249125a7b6e629912e70cc0a9";
const endPoint =
  "https://api.themoviedb.org/3/search/movie?api_key=43a5918249125a7b6e629912e70cc0a9&query=";

// const inputElement = document.querySelector("#inputValue");
let apiData;

async function searchClick () {
  

  try {
    loader.innerHTML='<img src="assets/813.gif">'
    await fetchApit(inputValue.value);
    posterContainer.innerHTML = ''
    showPoster();
  } catch (err) {
    console.log(err + "error");
  } finally {
    loader.innerHTML='  '
  }
};

async function fetchApit(title) {
  await fetch(`${endPoint}${title}`)
    .then((res) => res.json())
    .then((data) => (apiData = data))
    .catch();
}

function showPoster() {
  console.log(apiData.results[0].backdrop_path);
  apiData.results.forEach((element) => {
    posterContainer.innerHTML += `  <div class='container'> <img src=${
      "https://image.tmdb.org/t/p/w500/" + element.poster_path
    } alt="Image failes to load" class="posterImage"></div>`;
  });
}
