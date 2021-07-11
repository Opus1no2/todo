import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import useToken from './hooks/useToken';

const NavBar = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: #448fff;
  padding: 2rem;
`;

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;


const Nav = () => {
  const history = useHistory();
  const token = useToken();

  const logout = () => {
    token.unset();
    history.push('/login');
  };

  return (
    <NavBar>
      <Ul>
        <li><button onClick={logout}>Log out</button></li>
      </Ul>
    </NavBar>
  );
};

export default Nav;