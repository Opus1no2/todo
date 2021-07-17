import { useState } from 'react'
import * as fromApi from '../api/login'
import useToken from './useToken'

const useProvideAuth = () => {
  const [user, setUser] = useState(null)
  const token = useToken()

  const login = (email, password) => {
    return fromApi.login(email, password).then(response => {
      setUser(response.data)
      token.save(response.headers.authorization)
    })
  }

  return {
    user,
    login
  }
}

export default useProvideAuth
