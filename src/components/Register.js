import React, { useState } from 'react';
import app from '../firebase/config';
import { useHistory } from 'react-router-dom';

const Register  = () => {
  let history = useHistory()
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const onInputChange = (e, name) => {
    let inputValue = e.target.value
    if(name === 'pass') { 
      setPass(inputValue)
    } if(name === 'email') {
      setEmail(inputValue)
    }
  }

  const registerUser = () => {
    app.auth().createUserWithEmailAndPassword(email, pass).then((response) => {
      if(response) {
        history.push('/login')
      }
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error(errorMessage, errorCode);
    })
  }

  return(
  <div className="form">
    <div className="form-row">
      <label>Email</label>
      <input name="email" onChange={(e) => onInputChange(e,'email')}></input>
    </div>
    <div className="form-row">
      <label>Password</label>
      <input name="password" type="password" onChange={(e) => onInputChange(e, 'pass')}></input>
    </div>
    <button className="form-row" onClick={registerUser}>
      Register
    </button>
  </div>)
}

export default Register


