import "../style/movieList.css";
import React, { useState, useEffect } from "react";
import { deleteMovie, searchMovie } from "../services/movieService";
import Movie from "./movie.js";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    retrieveMovies();
  }, []);

  const onChangeSearchTitle = (e) => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const retrieveMovies = () => {
    searchMovie()
      .then((response) => {
        response.data.length = 10;
        setMovies(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveMovies();
    setCurrentIndex(-1);
  };

  const setActiveMovie = (movie, index) => {
    setCurrentIndex(index);
  };

  const handleDeleteMovie = (objectID) => {
    deleteMovie(objectID)
      .then(() => {
        refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const searchMovies = () => {
    searchMovie(searchTitle)
      .then((response) => {
        setMovies(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleKeypress = (e) => {
    if (e.charCode === 13) {
      searchMovies();
    }
  };

  return (
    <div className="list row">
      <div>
        <input
          type="text"
          className="searchBar"
          name="search"
          value={searchTitle}
          onChange={onChangeSearchTitle}
          onKeyPress={handleKeypress}
          placeholder={"Search.."}
        />
      </div>
      <div className="col-md-8"></div>
      <div className="col-md-8">
        <ul className="list-group">
          {movies &&
            movies.map((movies, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveMovie(movies, index)}
                key={`movie_div_${index}`}
              >
                <button
                  className="btn"
                  onClick={() => handleDeleteMovie(movies.objectID)}
                >
                  <i className="fa fa-trash"></i> Remove
                </button>

                <Movie movie={movies} />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
export default MovieList;
