import React from 'react';

const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ title, name, id }) => (
        <li key={id}>{title || name}</li>
      ))}
    </ul>
  );
};

export default MoviesList;
//  style={{ width: '300px' }}
