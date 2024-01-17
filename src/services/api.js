import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'a62896418b9c78ff6682cfb14307cf6b';

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
  );
  return data.results;
};

export const fetchgMoviesByName = async searchText => {
  const { data } = await axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${searchText}`
  );
  return data.results;
};

export const fetchMovieById = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}movie/${movieId}?api_key=${API_KEY}`
  );
  return data;
};

export const fetchMovieCast = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`
  );

  return data.cast;
};
export const fetchMovieReviews = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  console.log(data);
  return data.results;
};
