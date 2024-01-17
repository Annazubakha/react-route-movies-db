import React from 'react';
import { MoviesItemLink } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ title, name, id }) => (
        <li key={id}>
          <MoviesItemLink to={id.toString()}>{title || name}</MoviesItemLink>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
