import React from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import useToken from '../hooks/useToken'

const NavBar = styled.nav`
  display: flex;
  justify-content: flex-end;
  background: ${props => props.theme.lightBlue};
  align-items: center;
  padding: 1rem;
`

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const LogoutBtn = styled.button(
  ({ theme }) => `
    display: none;
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

    @media(min-width: 1024px) {
      display: block;
    }
  `
)

const MenuLink = styled(Link)`
  display: flex;
  text-decoration: none;
  color: ${props => props.theme.fontWhite};
  border: solid 1px white;
  background: ${props => props.theme.lightBlue};
  padding: .2rem;
  text-transform: uppercase;

  @media(min-width: 1024px) {
    display: none;
  }
`

const Header = () => {
  const history = useHistory()
  const token = useToken()

  const logout = () => {
    token.unset()
    history.push('/')
  }

  return (
    <NavBar>
      <Ul>
        <li><LogoutBtn onClick={logout}>Log out</LogoutBtn></li>
        <li><MenuLink to="/menu">Menu</MenuLink></li>
      </Ul>
    </NavBar>
  )
}

export default Header
