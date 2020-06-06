import React, { useState } from 'react';

const Register  = () => {

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
    <button className="form-row">
      Login
    </button>
   
  </div>)
}

export default Register


