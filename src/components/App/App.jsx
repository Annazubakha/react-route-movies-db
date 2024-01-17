import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import NotFound from 'pages/NotFound/NotFound';
import Header from 'components/Header/Header';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Cast from 'components/NestedRoutes/Cast';
import Reviews from 'components/NestedRoutes/Reviews';
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
