import React from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import useToken from './hooks/useToken'

const NavBar = styled.nav`
  display: flex;
  justify-content: flex-end;
  background: ${props => props.theme.lightBlue};
  align-items: center;
  padding: 1rem;
  flex: 1;
`

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const LogoutBtn = styled.button`
  appearnce: none;
  border: none;
  background: white;
  padding: .5rem;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
    background: #4aabff;
    color: white;
  }
`

const Header = () => {
  const history = useHistory()
  const token = useToken()

  const logout = () => {
    token.unset()
    history.push('/login')
  }

  return (
    <NavBar>
      <Ul>
        <li><LogoutBtn onClick={logout}>Log out</LogoutBtn></li>
      </Ul>
    </NavBar>
  )
}

export default Header
