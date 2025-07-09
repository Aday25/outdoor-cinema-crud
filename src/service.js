const API_URL = 'http://localhost:3000/movies';
const BAD_WORDS = ["idiota", "imbécil", "estúpido", "mierda", "puta", "gilipollas"];

// CRUD: Películas

async function createMovie(newMovie) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newMovie)
  });
  return await response.json();
}

async function getMovies() {
  const result = await fetch(API_URL);
  return await result.json();
}

async function updateMovie(id, editedMovie) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(editedMovie)
  });
  return await response.json();
}

async function deleteMovie(id) {
  const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  return response.ok;
}

let sharkContainer = document.querySelector('#shark-movies');
let literatureContainer = document.querySelector('#literature-movies');

function containsBadWords(comment) {
  return BAD_WORDS.some(word => comment.toLowerCase().includes(word));
}

function createMovieCard(movie) {
  const card = document.createElement("div");
  card.classList.add("movie-card");

  card.innerHTML = `
    <h3>${movie.title}</h3>
    <p><strong>Año:</strong> ${movie.year}</p>
    <p><strong>Género:</strong> ${movie.gender}</p>
    <p><strong>Ciencia:</strong> ${movie.scienceField}</p>
    <p><strong>Director:</strong> ${movie.director}</p>
    <p><strong>Actores:</strong> ${movie.actors}</p>
    <p><strong>Descripción:</strong> ${movie.movie_description}</p>
    ${movie.video_url ? `<iframe src="${movie.video_url}" frameborder="0" allowfullscreen></iframe>` : ""}
    <input type="text" placeholder="Agrega un comentario..." class="comment-input">
    <button class="comment-btn">Comentar</button>
    <div class="likes">
      <span class="like">👍</span>
      <span class="dislike">👎</span>
      <span class="love">❤️</span>
    </div>
    <ul class="comment-list"></ul>
  `;

  const commentInput = card.querySelector(".comment-input");
  const commentBtn = card.querySelector(".comment-btn");
  const commentList = card.querySelector(".comment-list");

  commentBtn.addEventListener("click", async () => {
    const commentText = commentInput.value.trim();
    if (!commentText) return;
    if (containsBadWords(commentText)) {
      alert("Tu comentario contiene lenguaje inapropiado.");
      return;
    }

    movie.comments.push(commentText);
    await updateMovie(movie.id, movie);
    const li = document.createElement("li");
    li.textContent = commentText;
    commentList.appendChild(li);
    commentInput.value = "";
  });

  if (movie.comments) {
    movie.comments.forEach(c => {
      const li = document.createElement("li");
      li.textContent = c;
      commentList.appendChild(li);
    });
  }

  return card;
}

async function printMovies() {
  sharkContainer.innerHTML = "";
  literatureContainer.innerHTML = "";

  const movies = await getMovies();
  const sharkMovies = movies.slice(0, 5);
  const literatureMovies = movies.slice(5);

  sharkMovies.forEach(movie => sharkContainer.appendChild(createMovieCard(movie)));
  literatureMovies.forEach(movie => literatureContainer.appendChild(createMovieCard(movie)));
}

document.addEventListener("DOMContentLoaded", () => {
  printMovies();

  document.querySelector("#suggestion-form").addEventListener("submit", async e => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value.trim();
    if (!title) return;

    const newMovie = {
      id: Date.now().toString(),
      title,
      year: "",
      gender: "Sugerencia",
      scienceField: "",
      director: "",
      actors: "",
      movie_description: form.reason.value.trim(),
      video_url: "",
      comments: []
    };
    await createMovie(newMovie);
    form.reset();
    alert("Sugerencia enviada. Gracias.");
    printMovies();
  });
});
