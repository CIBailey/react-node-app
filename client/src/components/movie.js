import "../style/movieList.css";
import React from "react";

const Movie = ({ movie }) => {
  console.log(movie);
  return (
    <div class="row no-gutters">
      <div class="card-body">
        <h5 class="card-title">{movie.title}</h5>
        <div> {movie.year} </div>

        <p class="card-text">
          {movie.actors &&
            movie.actors.map((actor, index) => <div>{actor}</div>)}
        </p>
        <div> {movie.rating} </div>
      </div>
    </div>
  );
};
export default Movie;
