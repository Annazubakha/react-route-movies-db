import React from 'react';
import { NotFoundLink, NotFoundText, NotFoundWrapper } from './NotFound.styled';

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <NotFoundText>Sorry... Page was not found!</NotFoundText>
      <NotFoundLink to="/">Return to homepage</NotFoundLink>
    </NotFoundWrapper>
  );
};

export default NotFound;
