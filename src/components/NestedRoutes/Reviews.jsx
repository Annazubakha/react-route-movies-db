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
    <>
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <h3>Author{author}</h3>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Reviews;
