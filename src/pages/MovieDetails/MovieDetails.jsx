import React, { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/api';
import {
  StyledLink,
  StyledLinkGoBack,
  StyledMovieAdditionalInfoWrapper,
  StyledMovieDetails,
  StyledMovieDetailsWrapper,
  StyledMovieInfoWrapper,
} from './MovieDetails.styled';
import { Loader } from 'components/Loader/Loader';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const goBackLink = useRef(location.state?.from || '/movies');
  const defaultImg =
    'https://images.unsplash.com/photo-1612872750175-5b67ab0a6011?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  useEffect(() => {
    setIsLoading(true);
    fetchMovieById(movieId)
      .then(setMovie)
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  if (!movie) {
    return;
  }

  return (
    <StyledMovieDetailsWrapper>
      <StyledLinkGoBack to={goBackLink.current}>Go BACK</StyledLinkGoBack>
      <StyledMovieDetails>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : defaultImg
          }
          width={250}
          alt="poster"
        />
        <StyledMovieInfoWrapper>
          <h2>{movie.title}</h2>
          <p>User Score: {Math.round(movie.vote_average)}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres: </h3>
          <p>
            {movie.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </p>
        </StyledMovieInfoWrapper>
      </StyledMovieDetails>
      <StyledMovieAdditionalInfoWrapper>
        <StyledLink to="cast">Cast</StyledLink>
        <StyledLink to="reviews">Reviews</StyledLink>
      </StyledMovieAdditionalInfoWrapper>
      <Outlet />
      {isLoading && <Loader />}
    </StyledMovieDetailsWrapper>
  );
};

export default MovieDetails;
