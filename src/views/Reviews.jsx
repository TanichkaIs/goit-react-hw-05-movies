import { useState, useEffect } from 'react';
import {fetchMoviesReviews} from '../services/apiMovie';
import { useParams } from 'react-router-dom';

export default function Reviews() {
  const { movieId } = useParams();
  const [review, setReview] = useState(null);

  useEffect(() => {
    fetchMoviesReviews(movieId)
      .then(({ results }) => setReview(results));
  }, [movieId]);

  return (
    <>
      {review && review.length > 0 ? (
        <ul>
          {review.map(el => {
            const { id, author, content } = el;
            return (
              <li key={id}>
                <h3>{author}</h3>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
}