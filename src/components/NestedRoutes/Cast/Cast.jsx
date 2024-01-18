import { Loader } from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/api';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const defaultImg =
    'https://creazilla-store.fra1.digitaloceanspaces.com/emojis/44292/bust-in-silhouette-emoji-clipart-md.png';

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
    <>
      {cast?.length > 0 ? (
        <ul>
          {cast.map(({ id, name, character, profile_path }) => (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : defaultImg
                }
                width={125}
                alt="actor foto"
              />
              <h3>{name}</h3>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <h3>There is not cast for this movie.</h3>
      )}
      {isLoading && <Loader />}
    </>
  );
};

export default Cast;
