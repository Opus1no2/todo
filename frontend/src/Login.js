import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useAuth from './useAuth';

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
    <form onSubmit={authenticate}>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" onChange={(e) => setEmail(e.target.value)}></input>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" onChange={(e) => setPassword(e.target.value)}></input>
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
