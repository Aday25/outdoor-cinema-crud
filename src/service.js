// CREATE
async function createMovie(newMovie) {
  const response = await fetch('http://localhost:3000/movies', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newMovie)
  });
  const data = await response.json();
  console.log("Película creada:", data);
  return data;
}

// READ
async function getMovies() {
  const result = await fetch('http://localhost:3000/movies');
  const data = await result.json();
  return data;
}

// UPDATE
async function updateMovie(id, editedMovie) {
  const response = await fetch(`http://localhost:3000/movies/${id}`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(editedMovie)
  });
  const data = await response.json();
  console.log(`Película con id ${id} actualizada`);
  return data;
}

// DELETE
async function deleteMovie(id) {
  const response = await fetch(`http://localhost:3000/movies/${id}`, {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json'
    }
  });
  console.log(`Película con id ${id} eliminada`);
  return response.ok;
}

// DOM
let sharkContainer = document.querySelector('#shark-movies');
let literatureContainer = document.querySelector('#literature-movies');

// Función para crear una tarjeta de película
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
  `;

  return card;
}

// Imprimir películas en dos secciones
async function printMovies() {
  sharkContainer.innerHTML = "";
  literatureContainer.innerHTML = "";

  const movies = await getMovies();

  const sharkMovies = movies.slice(0, 5);       // Primeras 5
  const literatureMovies = movies.slice(5, 10); // Siguientes 5

  sharkMovies.forEach(movie => {
    const card = createMovieCard(movie);
    sharkContainer.appendChild(card);
  });

  literatureMovies.forEach(movie => {
    const card = createMovieCard(movie);
    literatureContainer.appendChild(card);
  });
}

// Ejecutar al cargar la página
document.addEventListener("DOMContentLoaded", printMovies);
