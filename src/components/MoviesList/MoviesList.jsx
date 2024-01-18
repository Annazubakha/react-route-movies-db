import React from 'react';
import { MoviesItemLink } from './MoviesList.styled';
import { useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <ul>
        {movies.map(({ title, name, id }) => (
          <li key={id}>
            <MoviesItemLink state={{ from: location }} to={`/movies/${id}`}>
              {title || name}
            </MoviesItemLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MoviesList;
