import React from 'react'
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


// paths
import Login from './components/Login'
import Register from './components/Register'

import './scss/main.scss'


// router

import { ApolloProvider } from '@apollo/react-hooks'
import ShowCountries from '../src/components/ShowCountries'
import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  uri: 'https://countries-274616.ew.r.appspot.com/'
})

const App = () => {

  return (
    <Router>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Register} />
    </Router>
   
  //  <ApolloProvider client={client}>
  //    <div className=""> 
  //       {/* <ShowCountries/> */}
  //    </div>
  //  </ApolloProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))