import React from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import useToken from './hooks/useToken'

const NavBar = styled.nav`
  display: flex;
  justify-content: flex-end;
  border-bottom: solid 1px #b9dfff;
  border-top: solid 6px #5db5ff;
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
  border: solid 1px grey;
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
