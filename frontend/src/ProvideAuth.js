import React from 'react';
import authContext from './authContext';
import useProvideAuth from './useProvideAuth';

const PrivideAuth = ({ children }) => {
  const auth = useProvideAuth();

  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
};

export default PrivideAuth;