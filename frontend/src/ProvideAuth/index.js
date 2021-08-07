import React from 'react'
import authContext from '../contexts/authContext'
import useProvideAuth from '../hooks/useProvideAuth'
import PropTypes from 'prop-types'

const PrivideAuth = ({ children }) => {
  const auth = useProvideAuth()

  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  )
}

PrivideAuth.propTypes = {
  children: PropTypes.any
}

export default PrivideAuth
