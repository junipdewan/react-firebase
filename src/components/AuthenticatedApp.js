import React from 'react';
import app from '../firebase/config'
import { useHistory } from 'react-router-dom'


const AuthenticatedApp = () => {
  let history = useHistory()

const logOut = () => {

  app.auth().signOut().then((response) => {
    console.log(response)
    history.push('/login');
  }).catch((error) =>{
    console.log(error)
  })
}

  return(
    <div>
      Authenticated
      <button className="" onClick={logOut}>Logout</button>
    </div>
  )
}

export default AuthenticatedApp;