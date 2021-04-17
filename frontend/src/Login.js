import React, { useState } from 'react';
import login from './api/login';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const authenticate = (e) => {
    e.preventDefault();

    login(email, password).then(resp => console.log(resp)).catch(err => console.log(err));
  };

  return (
    <form onSubmit={authenticate}>
      <label htmlFor="password">Password</label>
      <input type="password" id="password" onChange={(e) => setPassword(e.target.value)}></input>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" onChange={(e) => setEmail(e.target.value)}></input>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
