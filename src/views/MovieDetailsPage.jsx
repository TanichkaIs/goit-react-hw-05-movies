import { useState, useEffect } from 'react';
import { Link, useNavigate, Outlet, useLocation, useParams } from 'react-router-dom';
import {fetchMovieDetails} from '../services/apiMovie';
import MovieDetailsElement from './MovieDetailsElement/MovieDetailsElement';

export default function MovieDetailsPage() {
  const [detailsMovies, setDetailsMovies] = useState(null);
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetchMovieDetails(movieId).then(setDetailsMovies);
  }, [movieId]);

  return (
    <>
      {detailsMovies && (
        <main>
          {
            <MovieDetailsElement
              onClick={() => navigate(location?.state?.from ?? '/')}
              movie={detailsMovies}
            />
          }
          <p>Additional information</p>
          <Link to="cast" state={{from: location?.state?.from ?? '/'}}>Cast</Link>
          <br />
          <Link to="reviews" state={{from: location?.state?.from ?? '/'}}>Reviews</Link>
        </main>
      )}
      <Outlet />
    </>
  );
}