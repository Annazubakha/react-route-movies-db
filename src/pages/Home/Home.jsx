import { Loader } from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import React, { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'services/api';
import { MoviesStyledWrapper } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetchTrendingMovies()
      .then(setMovies)
      .finally(() => setIsLoading(false));
  }, []);
  console.log(movies);
  return (
    <MoviesStyledWrapper>
      <h1>Trending today</h1>

      {movies.length > 0 && <MoviesList movies={movies} />}
      {isLoading && <Loader />}
    </MoviesStyledWrapper>
  );
};

export default Home;
