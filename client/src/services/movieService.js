import http from "../http-common";

const createMovie = (data) => {
  return http.post("/movies", data);
};

const deleteMovie = (id) => {
  return http.delete(`/movies/${id}`);
};

const searchMovie = (query = "") => {
  return http.get(`/?search=${query}`);
};

export { createMovie, deleteMovie, searchMovie };
