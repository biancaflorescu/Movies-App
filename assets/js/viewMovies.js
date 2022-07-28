import { Movie } from "./Movie.js";

const moviesContainer = document.getElementById("movies");

function showMovies() {
  const storage = { ...localStorage };
  let movies = Object.values(storage);

  moviesContainer.innerHTML = "";

  for (let i = 0; i < movies.length; i++) {
    let movie = JSON.parse(movies[i]);

    moviesContainer.innerHTML += `
          <div class="movie">
            <img src="${movie.imageUrl}" alt="" class="movieImage">
            <p class="movieTitle"><strong>${movie.title}</strong></p>
            <p class="movieActors">${movie.mainActors}</p>
            <p class="movieGenre"><em>${movie.genre}</em></p>
            <div id="movieBtns">
                <button class="movieBtn editBtn" data-id="${movie.id}" onclick="handleEditMovie(event)">Edit</button>
                <button class="movieBtn deleteBtn" data-id="${movie.id}" onclick="handleDeleteMovie(event)">Delete</button>
            </div>
          </div>
          <div id="editMovieModal" class="modal">
              <div class="modal-content">
                  <span id="closeModal">&times;</span>
                  <div id="form-container">
                    <form id="editMovieForm">
                        <div class="input-div">
                            <label for="title">Title</label>
                            <input type="text" id="title" name="title">
                        </div>

                        <div class="input-div">
                            <label for="actors">Main Actors</label>
                            <input type="text" id="actors" name="actors">

                        </div>

                        <div class="input-div">
                            <label for="genre">Genre</label>
                            <input type="text" id="genre" name="genre">
                        </div>

                        <div class="input-div">
                            <label for="image">Image URL</label>
                            <input type="text" id="image" name="image">
                        </div>

                        <button id="save-movie-btn">Save Movie</button>
                    </form>
                  </div>
              </div>
          </div>
        `;
  }
}

showMovies();

window.handleDeleteMovie = function (event) {
  const id = event.target.dataset.id;

  localStorage.removeItem(id);

  showMovies();
};

window.handleEditMovie = function (event) {
  const modal = document.getElementById("editMovieModal");

  modal.style.display = "block";

  document.getElementById("closeModal").addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  ////////////////////////////////////////

  const id = event.target.dataset.id;
  console.log(id);

  let movie = JSON.parse(localStorage.getItem(id));

  const title = document.getElementById("title");
  const actors = document.getElementById("actors");
  const genre = document.getElementById("genre");
  const image = document.getElementById("image");

  title.value = movie.title;
  actors.value = movie.mainActors;
  genre.value = movie.genre;
  image.value = movie.imageUrl;

  const saveMovieBtn = document.getElementById("save-movie-btn");

  saveMovieBtn.addEventListener("click", handleSaveMovie);

  function handleSaveMovie(e) {
    e.preventDefault();

    movie = new Movie(movie.id, title.value);
    movie.setMainActors(actors.value);
    movie.setGenre(genre.value);
    movie.setImageUrl(image.value);

    window.localStorage.setItem(movie.id, JSON.stringify(movie));

    alert("Your Movie has been successfully saved!");

    showMovies();
  }
};
