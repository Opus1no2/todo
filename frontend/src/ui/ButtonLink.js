import styled from 'styled-components'

export const ButtonLink = styled.button`
  appearnce: none;
  text-decoration: underline;
  border: none;
  background: transparent;
  color: ${props => props.theme.fontWhite};

  &:hover {
    cursor: pointer;
    color: white;
  }
`
