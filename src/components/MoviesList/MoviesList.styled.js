import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MoviesItemLink = styled(Link)`
  color: white;
  font-size: 18px;
  text-decoration: none;
  &.active {
    color: #9ff6b5;
  }
  &:hover:not(.active) {
    color: #306e07;
  }
`;
