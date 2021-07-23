import React from 'react'
import styled from 'styled-components'

const StyledTextInput = styled.input`
  border:none;
  border-bottom: solid 1px #96c2f9;
  background-image:none;
  background-color:transparent;
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
`

const TextInput = (props) => {
  return <StyledTextInput {...props} />
}

export default TextInput
