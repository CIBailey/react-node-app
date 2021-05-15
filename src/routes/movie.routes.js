module.exports = (app) => {
  const movies = require("../controllers/movie.controller");

  var router = require("express").Router();

  // Create a new movie
  router.post("/1/movies", movies.create);

  // Retrieve searched movies
  router.get("/1/?search=:query", movies.search);

  // Delete a movie with id
  router.delete("/1/movies:id", movies.delete);

  app.use("/api", router);
};
