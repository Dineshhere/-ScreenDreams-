let api = "https://www.omdbapi.com/?apikey=30328d8e&t=";

let result_container = document.getElementById("result-container");
result_container.classList.add("d-none");

let glass_effect = document.getElementById("glass");
glass_effect.classList.add("d-none");

let loading = document.getElementById("loader-container");
loading.classList.add("d-none");

let round_button = document.getElementById("search-extend-button");
let main_search = document.getElementById("main-search");

main_search.classList.add("d-none");

let movie_name_input = document.getElementById("movie-name");

let hide_all = document.getElementById("hide-all-btn");
hide_all.classList.remove("new-hide-js");

let title = document.getElementById("title");
let actors = document.getElementById("actors");
let director = document.getElementById("director");
let genre = document.getElementById("genre");
let production = document.getElementById("production");
let language = document.getElementById("language");
let released = document.getElementById("released");
let year = document.getElementById("year");
let runtime = document.getElementById("runtime");
let poster = document.getElementById("poster");
let boxoffice = document.getElementById("box-office");
let rating = document.getElementById("imdb-rating");

function fetch_movie() {
  glass_effect.classList.remove("d-none");
  loading.classList.remove("d-none");
  result_container.classList.add("d-none");
  let final = api + movie_name_input.value;
  console.log(final);
  fetch(final)
    .then((data) => {
      return data.json();
    })
    .then((movie_data) => {
      hide_all.classList.add("new-hide-js");
      loading.classList.add("d-none");
      result_container.classList.remove("d-none");
      result_container.classList.add("animate");
      glass_effect.classList.add("d-none");
      //content getter
      title.textContent = movie_data.Title;
      actors.textContent = movie_data.Actors;
      director.textContent = movie_data.Director;
      genre.textContent = movie_data.Genre;
      production.textContent = movie_data.Production;
      language.textContent = movie_data.Language;
      released.textContent = movie_data.Released;
      year.textContent = movie_data.Year;
      runtime.textContent = movie_data.Runtime;
      boxoffice.textContent = movie_data.BoxOffice;
      poster.src = movie_data.Poster;
      rating.textContent = movie_data.imdbRating;
    });
}

function hideall() {
  loading.classList.add("d-none");
  result_container.classList.add("d-none");
  movie_name_input.value = "";
  hide_all.classList.remove("new-hide-js");
}

function extendbutton() {
  round_button.classList.add("d-none");
  main_search.classList.remove("d-none");
  main_search.classList.add("animate");
  // document.querySelector(".container").classList.add("active");
}
