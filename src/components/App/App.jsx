import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
// import Home from 'pages/Home/Home';
// import Movies from 'pages/Movies/Movies';
// import NotFound from 'pages/NotFound/NotFound';
// import Header from 'components/Header/Header';
// import MovieDetails from 'pages/MovieDetails/MovieDetails';
// import Cast from 'components/NestedRoutes/Cast/Cast';
// import Reviews from 'components/NestedRoutes/Reviews/Reviews';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const Header = lazy(() => import('components/Header/Header'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));
const Cast = lazy(() => import('components/NestedRoutes/Cast/Cast'));
const Reviews = lazy(() => import('components/NestedRoutes/Reviews/Reviews'));
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
