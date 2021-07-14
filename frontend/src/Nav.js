import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import useToken from './hooks/useToken';

const NavBar = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: #448fff;
  padding: 1.5rem;
  flex: 1;
`;

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const LogoutBtn = styled.button`
  appearnce: none;
  border: none;
  background-color: transparent;
  color: white;

  text-transform: uppercase;

  &:hover {
    cursor: pointer;
  }
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
        <li><LogoutBtn onClick={logout}>Log out</LogoutBtn></li>
      </Ul>
    </NavBar>
  );
};

export default Nav;