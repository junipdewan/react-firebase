import React from 'react'
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";


import PrivateRoute from '../src/Routes/PrivateRoute'
import { AuthProvider } from './context/AuthContext'

// paths
import Login from './components/Login'
import Register from './components/Register'
import AuthenticatedApp from './components/AuthenticatedApp'
import './scss/main.scss'

const App = () => {

  return (
    <AuthProvider>
      <Router >
        <PrivateRoute exact path="/" component={AuthenticatedApp} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Register} />
      </Router>
    </AuthProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))