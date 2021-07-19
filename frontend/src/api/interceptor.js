import axios from 'axios'
import useToken from '../hooks/useToken'

let endpoint = 'http://127.0.0.1:5000/api'

if (process.env.NODE_ENV === 'production') {
  endpoint = 'http://todo-prod-blue.eba-n2wwiv67.us-west-2.elasticbeanstalk.com/api'
}

axios.defaults.baseURL = endpoint

axios.interceptors.request.use((config) => {
  const token = useToken().get()
  if (token) {
    config.headers.common.Authorization = `Bearer ${token}`
  }
  return config
}, (error) => {
  return Promise.reject(error)
})
