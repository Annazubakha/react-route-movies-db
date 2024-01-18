import { Loader } from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setRewiews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchMovieReviews(movieId)
      .then(setRewiews)
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  if (!reviews) {
    return () => {
      setIsLoading(true);
    };
  }

  return (
    <div>
      {reviews?.length > 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <h3>There are not any reviews for this movie.</h3>
      )}
      {isLoading && <Loader />}
    </div>
  );
};

export default Reviews;
