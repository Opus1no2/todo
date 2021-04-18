import { useState } from 'react';
import * as fromApi from './api/login';

const useProvideAuth = () => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    return await fromApi.login(email, password).then(response => {
      setUser(response);
    });
  }

  return {
    user,
    login,
  }
};

export default useProvideAuth;