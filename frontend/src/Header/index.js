import React from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import useToken from '../hooks/useToken'

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

const LogoutBtn = styled.button(
  ({ theme }) => `
    appearnce: none;
    border: none;
    color: ${theme.fontWhite};
    border: solid 1px white;
    background: ${theme.lightBlue};
    padding: .5rem;
    text-transform: uppercase;

    &:hover {
      cursor: pointer;
      color: white;
    }
  `
)

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
