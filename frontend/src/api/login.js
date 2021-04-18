import axios from 'axios';
import './interceptor';

export const login = (email, password) => {
  return axios.post('/login', {
    user: { email, password }
  });
}