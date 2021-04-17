import axios from 'axios';
import './interceptor';

function login(email, password) {
  return axios.post('/login', {
    user: { email, password }
  });
}

export default login;