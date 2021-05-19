import React, { useState } from "react";
import { createMovie } from "../services/movieService";
import "../style/addMovie.css";

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
    console.log(name, value);

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
    <div>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-5">
          <div className="submit-form">
            {submitted ? (
              <div class="form-style-2">
                <div class="form-style-2-heading">
                  You submitted successfully!
                </div>
                <button
                  className="btn "
                  style={{ backgroundColor: "#f4a261" }}
                  onClick={newMovie}
                >
                  Add
                </button>
              </div>
            ) : (
              <div>
                <div class="form-style-2">
                  <h4>Add a movie to the database</h4>
                  <label for="title">
                    <span>
                      Title <span class="required">*</span>
                    </span>
                    <input
                      type="text"
                      id="title"
                      required
                      class="input-field"
                      name="title"
                      value={movie.title}
                      onChange={handleInputChange}
                    />
                  </label>
                  <label for="year">
                    <span>
                      Year <span class="required">*</span>
                    </span>
                    <input
                      type="number"
                      max={2021}
                      min={0}
                      required
                      class="input-field"
                      name="year"
                      value={movie.description}
                      onChange={handleInputChange}
                    />
                  </label>
                  <label for="image">
                    <span>Image</span>
                    <input
                      onChange={handleInputChange}
                      type="file"
                      class="input-field"
                      name="image"
                      value={movie.image}
                    />
                  </label>
                  <label for="genre">
                    <span>
                      Genre <span class="required">*</span>
                    </span>
                    <select
                      onChange={handleInputChange}
                      required
                      name="genre"
                      class="select-field"
                    >
                      {genreOptions.map((oneGenre) => {
                        return (
                          <option key={oneGenre} value={oneGenre}>
                            {oneGenre}
                          </option>
                        );
                      })}
                    </select>
                  </label>
                  <label for="actors">
                    <span>
                      Actors <span class="required">*</span>
                    </span>
                    <input
                      type="text"
                      id="actors"
                      required
                      class="input-field"
                      name="actors"
                      value={movie.actors}
                      onChange={handleInputChange}
                    />
                  </label>
                  <label for="rating">
                    <span>
                      Rating <span class="required">*</span>
                    </span>

                    <div class="rating">
                      <label>
                        <input
                          onChange={handleInputChange}
                          type="radio"
                          name="rating"
                          value={1}
                        />
                        <div class="icon">★</div>
                      </label>
                      <label>
                        <input
                          onChange={handleInputChange}
                          type="radio"
                          name="rating"
                          value={2}
                        />
                        <div class="icon">★</div>
                        <div class="icon">★</div>
                      </label>
                      <label>
                        <input
                          onChange={handleInputChange}
                          type="radio"
                          name="rating"
                          value={3}
                        />
                        <div class="icon">★</div>
                        <div class="icon">★</div>
                        <div class="icon">★</div>
                      </label>
                      <label>
                        <input
                          onChange={handleInputChange}
                          type="radio"
                          name="rating"
                          value={4}
                        />
                        <div class="icon">★</div>
                        <div class="icon">★</div>
                        <div class="icon">★</div>
                        <div class="icon">★</div>
                      </label>
                      <label>
                        <input
                          onChange={handleInputChange}
                          type="radio"
                          name="rating"
                          value={5}
                        />
                        <div class="icon">★</div>
                        <div class="icon">★</div>
                        <div class="icon">★</div>
                        <div class="icon">★</div>
                        <div class="icon">★</div>
                      </label>
                    </div>
                  </label>
                  <label>
                    <span> </span>
                    <input onClick={saveMovie} type="submit" value="Submit" />
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default AddMovie;
