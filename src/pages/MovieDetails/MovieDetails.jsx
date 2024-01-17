import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/api';
import { StyledLink } from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchMovieById(movieId)
      .then(setMovie)
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  if (!movie) {
    return () => {
      setIsLoading(true);
    };
  }
  //  const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'
  return (
    // <img src={
    //  movieData.poster_path ?
    //  https://image.tmdb.org/t/p/w500/${movieData.poster_path}
    //  : defaultImg
    // }

    <div>
      {/* <img src={`${ movie.poster_path ?
 https://image.tmdb.org/t/p/w500/${movie.poster_path}
 : defaultImg
} `}width={250}
 alt="poster" /> */}

      <h2>{movie.title}</h2>
      <p>User Score: {Math.round(movie.vote_average)}%</p>
      <h3>Overview</h3>
      <p>{movie.overview}</p>
      <h3>Genres</h3>
      <p>
        {movie.genres.map(genre => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </p>
      <div>
        <StyledLink to="cast">Cast</StyledLink>
        <StyledLink to="reviews">Reviews</StyledLink>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetails;
