import React from 'react';
import { Outlet } from 'react-router-dom';
import { StyledLink, HeaderStyled, NavMenuList } from './Header.styled';

const Header = () => {
  return (
    <>
      <HeaderStyled>
        <nav>
          <NavMenuList>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="movies">Movies</StyledLink>
            </li>
          </NavMenuList>
        </nav>
      </HeaderStyled>

      <Outlet />
    </>
  );
};

export default Header;
