import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import useToken from './hooks/useToken'
import PropTypes from 'prop-types'

const PrivateRoute = ({ children, ...rest }) => {
  const token = useToken()

  return (
    <Route {...rest} render={({ location }) => token.get() ? (children) : (<Redirect to={{ pathname: '/', state: { from: location } }} />) } />
  )
}

PrivateRoute.propTypes = {
  children: PropTypes.any
}
export default PrivateRoute
