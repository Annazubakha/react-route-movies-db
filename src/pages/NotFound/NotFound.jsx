import React from 'react';
import { Link } from 'react-router-dom';
import { NotFoundText, NotFoundWrapper } from './NotFound.styled';

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <NotFoundText>Sorry... Page was not found!</NotFoundText>
      <Link to="/">Go home...</Link>
    </NotFoundWrapper>
  );
};

export default NotFound;
