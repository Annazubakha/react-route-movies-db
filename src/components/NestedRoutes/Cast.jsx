import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/api';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchMovieCast(movieId)
      .then(setCast)
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  if (!cast) {
    return () => {
      setIsLoading(true);
    };
  }

  return (
    <ul>
      {cast.map(({ id, name, character, profile_path }) => (
        <li key={id}>
          {/* <img src="" alt="" /> */}
          <h3>{name}</h3>
          <p>Character{character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
