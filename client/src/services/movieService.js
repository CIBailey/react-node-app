import http from "../http-common";

const createMovie = (data) => {
  return http.post("/movies", data);
};

const deleteMovie = (id) => {
  return http.delete(`/movies/${id}`);
};

const searchMovie = (query = "") => {
  const endpoint = query ? `/search${query}` : `/search`;
  return http.get(endpoint);
};

const getAllMovies = () => {
  return http.post(`/allMovies`);
};

export { createMovie, deleteMovie, searchMovie, getAllMovies };
