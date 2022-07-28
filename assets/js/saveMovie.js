import { Movie } from "./Movie.js";
import { generateId } from "./uuid.js";

const saveMovieBtn = document.getElementById("save-movie-btn");

saveMovieBtn.addEventListener("click", handleSaveMovie);

function handleSaveMovie(e) {
  e.preventDefault();

  const title = document.getElementById("title");
  const actors = document.getElementById("actors");
  const genre = document.getElementById("genre");
  const image = document.getElementById("image");

  if (
    title.value === "" ||
    actors.value === "" ||
    genre.value === "" ||
    image.value === ""
  ) {
    alert("You need to complete all the inputs!");
    return;
  }

  const movie = new Movie(generateId(), title.value);
  movie.setMainActors(actors.value);
  movie.setGenre(genre.value);
  movie.setImageUrl(image.value);

  window.localStorage.setItem(movie.id, JSON.stringify(movie));

  title.value = "";
  actors.value = "";
  genre.value = "";
  image.value = "";

  alert("Your Movie has been successfully saved!");
}
