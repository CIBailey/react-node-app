import "../style/movieList.css";
import React from "react";

const Movie = ({ movie }) => {
  console.log(movie);
  return (
    <div key={movie} className="col no-gutters">
      <div className="row no-gutters">
        {" "}
        <h5 className="card-title">{movie.title}</h5>
      </div>
      <div className="row no-gutters">
        {" "}
        <div> {movie.year} </div>
      </div>
      <p className="card-text">
        {movie.actors &&
          movie.actors.map((actor, index) =>
            index < 4 ? <div>{actor}</div> : null
          )}
      </p>
      <div className="row no-gutters">
        {[...Array(movie.rating)].map((e, i) => (
          <div>★</div>
        ))}
      </div>
    </div>
  );
};
export default Movie;
