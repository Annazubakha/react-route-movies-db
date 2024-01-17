import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  color: black;
  /* font-size: 16px; */
  text-decoration: none;
  &.active {
    color: #9ff6b5;
  }
  &:hover:not(.active) {
    color: #306e07;
  }
`;
