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
          <input type="email" placeholder="your@email.com" onChange={(e) => setEmail(e.target.value)}></input>
        </div>
        <div>
          <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}></input>
        </div>
        <button type="submit">Login</button>
      </form>
    </Container>
  );
};

export default Login;
