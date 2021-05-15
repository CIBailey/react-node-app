const db = require("../models");
const Movie = db.movies;

const dotenv = require("dotenv");
dotenv.config();

const algoliasearch = require("algoliasearch");
const client = algoliasearch(
  process.env.REACT_APP_ALGOLIA_APPLICATION_ID,
  process.env.REACT_APP_ALGOLIA_ADMIN_API_KEY
);
const index = client.initIndex(process.env.REACT_APP_ALGOLIA_INDEX_NAME);

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
    color: req.body.color,
    score: req.body.score,
    rating: req.body.rating,
    actors: req.body.actors,
    actor_facets: req.body.actor_facets,
    genre: req.body.genre,
    objectID: req.body.objectID,
  });

  movie
    .save(movie)
    .then(() => {
      index
        .saveObject(movie, { autoGenerateObjectIDIfNotExist: true })
        .then(({ objectID }) => {
          res.status(200).send({
            message: "Object created:" + objectID,
          });
        })
        .catch((err) => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the movie.",
          });
        });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating the movie instance in database",
      });
    });
};

// // Search all movies in Algolia.
exports.search = (req, res) => {
  const query = req.params.query;
  console.log("ididid", query);

  index
    .search(query)
    .then(({ hits }) => {
      res.status(200).send(hits);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving movies.",
      });
    });
};

// // Delete a movie with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  console.log("ididid", id);

  index
    .deleteBy({
      filters: "objectID:" + id,
    })
    .then(() => {
      if (!id) {
        res.status(404).send({
          message: `Cannot delete movie with id=${id}. No ID Provided`,
        });
      } else {
        Movie.findByIdAndRemove(id).then((data) => {
          if (!data) {
            res.status(404).send({
              message: `Cannot delete movie with id=${id}. Not found in MongoDB`,
            });
          } else {
            res.status(200).send({
              message: "Movie was deleted successfully!",
            });
          }
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message: err.message || "Could not delete movie with id=" + id,
      });
    });
};
