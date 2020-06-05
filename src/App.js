import React from 'react'
import ReactDOM from 'react-dom';
import './scss/main.scss'
import { ApolloProvider } from '@apollo/react-hooks'
import ShowCountries from '../src/components/ShowCountries'
import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  uri: 'https://countries-274616.ew.r.appspot.com/'
})

const App = () => {
  return (
   <ApolloProvider client={client}>
     <div className=""> 
        <ShowCountries/>
     </div>
   </ApolloProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))