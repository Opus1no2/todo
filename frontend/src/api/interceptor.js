import axios from 'axios';
import useToken from '../hooks/useToken';

axios.defaults.baseURL = 'http://127.0.0.1:5000/api';

axios.interceptors.request.use((config) => {
  const token = useToken().get();
  if (token) {
    config.headers.common['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error)
});