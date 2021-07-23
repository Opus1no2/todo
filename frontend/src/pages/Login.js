import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import useAuth from '../hooks/useAuth'
import TextInput from '../ui/TextInput'

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Btn = styled.button`
  background: white;
  border-radius: 0;
  border: solid 1px grey;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  padding: .5rem;

  &:hover {
    cursor: pointer;
    background: #4aabff;
    color: white;
  }
`

const FormCont = styled.div`
  width: 25%;
`

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()
  const auth = useAuth()

  const authenticate = (e) => {
    e.preventDefault()
    auth.login(email, password).then(() => history.push('/dashboard'))
  }

  return (
    <Container>
      <FormCont>
      <form onSubmit={authenticate}>
        <div>
          <TextInput type="email" id="email" placeholder="your@email.com" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <TextInput type="password" id="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <Btn type="submit">Login</Btn>
      </form>
      </FormCont>
    </Container>
  )
}

export default Login
