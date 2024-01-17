import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchgMoviesByName } from 'services/api';
import { MoviesSearchWrapper } from './Movies.styled';
import { Loader } from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import { SearchForm } from 'components/Form/Form';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const movie = searchParams.get('movie');
    if (!movie) return;
    setIsLoading(true);

    fetchgMoviesByName(movie)
      .then(setMovies)
      .finally(() => {
        setIsLoading(false);
      });
  }, [searchParams]);

  const handleSubmit = movie => {
    setSearchParams({ movie });
  };
  return (
    <MoviesSearchWrapper>
      <SearchForm onSubmit={handleSubmit} />
      {movies.length > 0 && <MoviesList movies={movies} />}
      {isLoading && <Loader />}
    </MoviesSearchWrapper>
  );
};

export default Movies;
