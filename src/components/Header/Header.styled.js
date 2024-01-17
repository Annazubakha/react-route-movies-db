import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
export const HeaderStyled = styled.header`
  padding: 30px;
  background-color: #032010;
  color: white;
`;

export const NavMenuList = styled.ul`
  list-style-type: none;
  justify-content: right;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
`;
export const StyledLink = styled(NavLink)`
  color: white;
  font-size: calc((1vh + 1vw) * 1.5);
  font-weight: bold;
  text-decoration: none;
  &.active {
    color: #9ff6b5;
  }
  &:hover:not(.active) {
    color: #306e07;
  }
`;
