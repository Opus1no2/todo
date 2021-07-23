import { useState } from 'react'
import * as fromApi from '../api/login'

const useProvideAuth = () => {
  const [user, setUser] = useState(null)

  const login = (email, password) => {
    return fromApi.login(email, password).then((response) => {
      setUser(response.data)
      window.location.assign('/dashboard')
    })
  }

  return {
    user,
    login
  }
}

export default useProvideAuth
