//  https://api.jikan.moe/v3/search/anime?q=naruto
let baseApi = "https://api.jikan.moe/v3/search/anime?q=";
let animeApi = `${baseApi}`;
let apiData;
function getApi(series) {
  return fetch(`${animeApi}${series}`).then((res) => {
    return res.json();
  });
}

async function getApiResults(series) {
  try {
    loadingDiv.innerHTML = '<img src="https://i.gifer.com/XwIB.gif">';
    await getApi(series).then((res) => (apiData = res.results));
  } catch (err) {
    console.error(err);
  } finally {
    loadingDiv.innerHTML = "";
  }
}

async function someFunc(series) {
    displaDiv.innerHTML=""
  await getApiResults(series);
  apiData.forEach((element) => {
    displaDiv.innerHTML += ` <img src="${element.image_url}">`;
  });
}
