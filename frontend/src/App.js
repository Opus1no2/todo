import React from 'react'

import './App.css'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import PrivateRoute from './PrivateRoute'
import ProvideAuth from './ProvideAuth'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App () {
  return (
    <ProvideAuth>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </ProvideAuth>
  )
}

export default App
