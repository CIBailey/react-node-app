import React, { useState } from "react";
import { createMovie } from "../services/movieService";

const AddMovie = () => {
  const genreOptions = [
    "Action",
    "Adventure",
    "Comedy",
    "Mystery",
    "Fantasy",
    "Horror",
    "Thriller",
    "Romance",
    "Western",
  ];
  const initialMovieState = {
    title: "",
    alternative_titles: [],
    year: null,
    image: "",
    color: "",
    score: "",
    rating: "",
    actors: [],
    actor_facets: [],
    genre: [],
  };
  const [movie, setMovie] = useState(initialMovieState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMovie({ ...movie, [name]: value });
  };

  const saveMovie = () => {
    var data = {
      title: movie.title,
      alternative_titles: [],
      year: movie.year,
      image: movie.image,
      color: "",
      score: "",
      rating: movie.rating,
      actors: movie.actors,
      actor_facets: [],
      genre: movie.genre,
    };

    createMovie(data)
      .then((response) => {
        setMovie({
          title: response.data.title,
          alternative_titles: [],
          year: response.data.year,
          image: response.data.image,
          color: response.data.color,
          score: response.data.score,
          rating: response.data.rating,
          actors: response.data.actors,
          actor_facets: [],
          genre: response.data.genre,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const newMovie = () => {
    setMovie(initialMovieState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newMovie}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={movie.title}
              onChange={handleInputChange}
              name="title"
            />
          </div>

          <div className="form-group">
            <label>Year</label>
            <input
              type="number"
              className="form-control"
              id="year"
              max={2021}
              min={0}
              required
              value={movie.description}
              onChange={handleInputChange}
              name="year"
            />
          </div>

          <div className="form-group">
            <label>Rating</label>
            <input
              type="number"
              className="form-control"
              id="year"
              max={5}
              min={0}
              required
              value={movie.rating}
              onChange={handleInputChange}
              name="year"
            />
          </div>

          <div className="form-group">
            <label>Image</label>
            <input type="file" id="myFile" name="filename" />
          </div>

          <div className="form-group">
            <label>Actors</label>
            <input
              type="text"
              className="form-control"
              id="actors"
              required
              value={movie.actors}
              onChange={handleInputChange}
              name="actors"
            />
          </div>

          <div className="form-group">
            <label for="genre">Genre</label>
            <select
              className="form-control"
              name="genre"
              onChange={handleInputChange}
              id="genre"
              required
              multiple
            >
              {genreOptions.map((oneGenre) => {
                return (
                  <option key={oneGenre} value={oneGenre}>
                    {oneGenre}
                  </option>
                );
              })}
            </select>
          </div>

          <button onClick={saveMovie} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddMovie;
