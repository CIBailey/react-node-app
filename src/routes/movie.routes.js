module.exports = (app) => {
  const movies = require("../controllers/movie.controller");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/1/movies", movies.create);

  // Retrieve all Tutorials
  router.get("/", movies.findAll);

  // Delete a Tutorial with id
  router.delete("/1/movies:id", movies.delete);

  app.use("/api", router);
};
