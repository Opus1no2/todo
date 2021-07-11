import React from 'react';
import styled from 'styled-components';

const NavBar = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: blue;
  padding: 2rem;
`;

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Nav = () => {
  return (
    <NavBar>
      <Ul>
        <li><button>Log out</button></li>
      </Ul>
    </NavBar>
  );
};

export default Nav;