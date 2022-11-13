import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import {fetchSearchMovies} from '../services/apiMovie';
import SearchMoviesForm from './SearchMoviesForm/SearchMoviesForm';

export default function SearchMovies() {
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');

  const handleSubmit = (values, { resetForm }) => {
    const inputValue = Object.values(values);
    setSearchParams({ query: inputValue });
    resetForm();
  };

  useEffect(() => {
    if (searchQuery === null) {
      return;
    }
    fetchSearchMovies(searchQuery)
      .then(({ results }) => setMovie(results));
  }, [searchQuery]);

  return (
    <div>
      {<SearchMoviesForm onSubmit={handleSubmit} />}
      {movie && movie.length > 0 && (
        <ul>
          {movie.map(m => (
            <li key={m.id}>
              <Link to={`${m.id}`} state={{ from: location }}>{m.title}</Link>
            </li>
          ))}
        </ul>
      )}
      {movie && movie.length === 0 && (
        <p>
          We will not find anything. Please change the request and try again.
        </p>
      )}
    </div>
  );
}