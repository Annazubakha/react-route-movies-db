import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  &.active {
    color: #9ff6b5;
  }
  &:hover:not(.active) {
    color: #306e07;
  }
`;

export const StyledLinkGoBack = styled(Link)`
  background-color: white;
  color: black;
  border-radius: 8px;
  padding: 5px;
  border: 2px solid #032010;
  height: 29.91px;
  width: 80px;
  height: 20px;
  text-align: center;

  text-decoration: none;
  &:hover {
    color: white;
    background-color: #306e07;
    outline: none;
  }
`;
export const StyledMovieDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 30px;
  background-color: #99b699;
  color: white;
  min-height: 80vh;
  & ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;
    gap: 18px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    & li {
      text-align: center;
    }
  }
  & h3,
  p {
    margin: 0;
  }
`;
export const StyledMovieDetails = styled.div`
  display: flex;
  gap: 25px;
`;
export const StyledMovieInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  & h2,
  h3,
  p {
    margin: 0;
  }
`;
export const StyledMovieAdditionalInfoWrapper = styled.div`
  display: flex;
  gap: 12px;
  font-size: 20px;
`;
