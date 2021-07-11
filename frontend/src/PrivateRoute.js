import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useToken from './hooks/useToken';

const PrivateRoute = ({children, ...rest}) => {
  let token = useToken();

  return (
    <Route {...rest} render={({ location }) => token.get() ? (children) : (<Redirect to={{ pathname: "/", state: { from: location }}} />) } />
  )
};

export default PrivateRoute;