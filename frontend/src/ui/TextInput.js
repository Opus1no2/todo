import React from 'react'
import styled from 'styled-components'

const StyledTextInput = styled.input`
  border: none;
  border-bottom: solid 1px ${props => props.theme.borderBlue};
  background-image: none;
  background-color: transparent !important;
  -webkit-appearance: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  outline: none;

  font-family: inherit;
  font-size: 100%;
  line-height: inherit;

  padding: .5rem;
  width: 100%;

  color: ${props => props.theme.fontWhite};
`

const TextInput = (props) => {
  return <StyledTextInput {...props} />
}

export default TextInput
