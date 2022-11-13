import { Route, Routes } from 'react-router-dom';
import Container from './Layout/Layout';
import { lazy } from 'react';

const HomePage = lazy(() => import('../views/HomePage'));
const SearchMovies = lazy(() => import('../views/SearchMovies'));
const MovieDetailsPage = lazy(() => import('../views/MovieDetailsPage'));
const Cast = lazy(() => import('../views/Cast'));
const Reviews = lazy(() => import('../views/Reviews'));
const NotFoundView = lazy(() => import('../views/NotFoundView'))

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Container />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<SearchMovies />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>        
      </Route>
      <Route path="*" element={<NotFoundView />} />
    </Routes>
  );
}