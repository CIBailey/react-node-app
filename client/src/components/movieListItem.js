import '../style/movieList.css';
import '../style/movieListItem.css';

import React from 'react';

const MovieListItem = ({ movie }) => {
  console.log(movie);
  return (
    <div key={movie} className='col no-gutters movie'>
      <div className='row no-gutters'>
        <div className='card-title'>{movie.title}</div>
      </div>

      <div className='subtext'>
        <div className='year'> {movie.year} </div>

        <div className='genre'>
          {movie.genre &&
            movie.genre.map((genre, index) => (
              <div className='one-genre'>{genre}</div>
            ))}
        </div>
      </div>
      <p className='card-text'>
        {movie.actors &&
          movie.actors.map((actor, index) =>
            index < 4 ? <div className='actor'>{actor}</div> : null
          )}
      </p>
      <div className='stars'>
        {[...Array(movie.rating)].map((e, i) => (
          <div className='single-star'>★</div>
        ))}
      </div>
    </div>
  );
};
export default MovieListItem;
