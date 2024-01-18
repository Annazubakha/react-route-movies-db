import React from 'react';
import { NotFoundLink, NotFoundText, NotFoundWrapper } from './NotFound.styled';

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <NotFoundText>Sorry... The page was not found!</NotFoundText>
      <NotFoundLink to="/">Return to the homepage</NotFoundLink>
    </NotFoundWrapper>
  );
};

export default NotFound;
