import React from 'react';
import { motion } from 'framer-motion';

const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;

  return (
    <>
      {props.movies.map((movie, index) => (
        <motion.div
          className='image-container d-flex justify-content-start m-3'
          key={movie.imdbID}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img src={movie.Poster} alt='movie'></img>
          <div
            onClick={() => props.handleFavouritesClick(movie)}
            className='overlay d-flex align-items-center justify-content-center'
          >
            <FavouriteComponent />
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default MovieList;