const db = require("../models");
const Movie = db.movies;

// Create and Save a new movie
exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const movie = new Movie({
    title: req.body.title,
    alternative_titles: req.body.alternative_titles,
    year: req.body.year,
    image: req.body.image,
    color: Sreq.body.color,
    score: req.body.score,
    rating: req.body.rating,
    actors: req.body.actors,
    actor_facets: req.body.actor_facets,
    genre: req.body.genre,
    objectID: req.body.objectID,
  });

  movie
    .save(movie)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the movie.",
      });
    });
};

// Get all movies from the database.
exports.findAll = (req, res) => {
  Movie.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving movies.",
      });
    });
};

// Delete a movie with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Movie.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete movie with id=${id}. Not found`,
        });
      } else {
        res.send({
          message: "Movie was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message: "Could not delete movoe with id=" + id,
      });
    });
};
