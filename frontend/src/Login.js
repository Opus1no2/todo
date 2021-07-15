import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useAuth from './hooks/useAuth';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  border:none;
  border-bottom: solid 1px #96c2f9;
  background-image:none;
  background-color:transparent;
  -webkit-appearance: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  outline: none;

  padding: .5rem;
`;

const Btn = styled.button`
  background: white;
  border-radius: 0;
  border: solid 1px grey;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: .5rem;
  padding: .5rem;

  &:hover {
    cursor: pointer;
    background: #4aabff;
    color: white;
  }
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const auth = useAuth();

  const authenticate = (e) => {
    e.preventDefault();
    auth.login(email, password).then(() => history.push("/dashboard"));
  };

  return (
    <Container>
      <form onSubmit={authenticate}>
        <div>
          <Input type="email" placeholder="your@email.com" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <Input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <Btn type="submit">Login</Btn>
      </form>
    </Container>
  );
};

export default Login;
