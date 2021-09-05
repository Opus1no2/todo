import React from 'react'

import './App.css'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import PrivateRoute from './PrivateRoute'
import ProvideAuth from './AuthProvider'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import TodoListsProvider from './TodoListsProvider'
import TodoListProvider from './TodoListProvider'

function App () {
  return (
    <ProvideAuth>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <PrivateRoute path="/dashboard">
              <TodoListsProvider>
                <TodoListProvider>
                  <Dashboard />
                </TodoListProvider>
              </TodoListsProvider>
            </PrivateRoute>
          </Switch>
        </Router>
      </ThemeProvider>
    </ProvideAuth>
  )
}

export default App
