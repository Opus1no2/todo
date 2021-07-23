import axios from 'axios'

export const login = (email, password) => {
  return axios.post('/v1/auth/sign_in', { email, password })
}
