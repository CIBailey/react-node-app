import "../style/MovieList.css";
import React, { useState, useEffect } from "react";
import { deleteMovie, searchMovie } from "../services/movieService";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [currentMovie, setCurrentMovie] = useState(null);
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
        setMovies(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveMovies();
    setCurrentMovie(null);
    setCurrentIndex(-1);
  };

  const setActiveMovie = (movie, index) => {
    setCurrentMovie(movie);
    setCurrentIndex(index);
  };

  const removeMovie = () => {
    deleteMovie()
      .then((response) => {
        console.log(response.data);
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
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <div className="list row">
        <input
          type="text"
          className="searchBar"
          name="search"
          value={searchTitle}
          onChange={onChangeSearchTitle}
          placeholder="Search.."
        />
        <div className="col-md-8">
          {/* <div className="input-group mb-3"> */}

          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={searchMovies}
            >
              Search
            </button>
          </div>
          {/* </div> */}
        </div>
        <div className="col-md-6">
          <h4>Movie List</h4>

          <ul className="list-group">
            {movies &&
              movies.map((movies, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => setActiveMovie(movies, index)}
                  key={index}
                >
                  {movies.title}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default MovieList;
