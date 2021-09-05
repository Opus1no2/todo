
import { useContext } from 'react'
import { authContext } from '../ProvideAuth'

const useAuth = () => {
  return useContext(authContext)
}

export default useAuth
