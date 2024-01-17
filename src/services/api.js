import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'a62896418b9c78ff6682cfb14307cf6b';

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
  );
  return data.results;
};
