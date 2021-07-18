import React from 'react'

import './App.css'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import PrivateRoute from './PrivateRoute'
import ProvideAuth from './ProvideAuth'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App () {
  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        </Switch>
      </Router>
    </ProvideAuth>
  )
}

export default App
