import { useState } from 'react';
import * as fromApi from './api/login';
import useToken from './useToken';

const useProvideAuth = () => {
  const [user, setUser] = useState(null);
  const token = useToken();

  const login = async (email, password) => {
    return await fromApi.login(email, password).then(response => {
      setUser(response);
      token.save(response.headers.authorization);
    });
  }

  return {
    user,
    login,
  }
};

export default useProvideAuth;