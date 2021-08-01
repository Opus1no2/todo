import axios from 'axios'
import useToken from '../hooks/useToken'

let client = null
let accessToken = null
let uid = null
let endpoint = 'http://127.0.0.1:5000/'

if (process.env.NODE_ENV === 'production') {
  endpoint = 'http://todo-prod-blue.eba-n2wwiv67.us-west-2.elasticbeanstalk.com/'
}

axios.defaults.baseURL = endpoint
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['token-type'] = 'Bearer'

axios.interceptors.request.use((config) => {
  const fromLocalStore = useToken().get()

  if (accessToken) {
    config.headers.common['access-token'] = accessToken
    config.headers.common.client = client
    config.headers.common.uid = uid
  }

  if (fromLocalStore && fromLocalStore.accessToken) {
    config.headers.common['access-token'] = fromLocalStore.accessToken
    config.headers.common.client = fromLocalStore.client
    config.headers.common.uid = fromLocalStore.uid
  }

  return config
}, (error) => {
  return Promise.reject(error)
})

axios.interceptors.response.use((response) => {
  const token = useToken()

  accessToken = response.headers['access-token']
  client = response.headers.client
  uid = response.headers.uid

  if (accessToken) {
    token.set(client, accessToken, uid)
  }

  return response
}, (err) => {
  return Promise.reject(err)
})
