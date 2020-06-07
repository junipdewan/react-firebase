import React, { useState } from 'react';
import app from '../firebase/config';
import { useHistory } from 'react-router-dom';

const Register  = () => {
  let history = useHistory()
  const [data, setState] = useState({
    // name: '',
   // phone: '',
   email: '',
   pass: ''
  })

  const onInputChange = (e, name) => {
    e.persist()
    setState(prev => ({
      ...prev,
      [name]: e.target.value
    }))
  }

  const registerUser = () => {
    app.auth().createUserWithEmailAndPassword(data.email, data.pass).then((response) => {
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
    <div className="form-container">
      <div className="form">
        <div className="form-content">
          {/* <div className="form-row">
            <label>Name</label>
            <input name="email" onChange={(e) => onInputChange(e,'name')}></input>
          </div> */}
          <div className="form-row">
            <label>Email</label>
            <input name="email" onChange={(e) => onInputChange(e,'email')}></input>
          </div>
          <div className="form-row">
            <label>Password</label>
            <input name="password" type="password" onChange={(e) => onInputChange(e, 'pass')}></input>
          </div>
          {/* <div className="form-row">
            <label>Phone Number</label>
            <input name="phone" onChange={(e) => onInputChange(e,'phone')}></input>
          </div> */}
          <div className="form-row">
            <div className="button-container">
              <button className="btn btn-success" onClick={registerUser}>
                Register
              </button>
            </div> 
          </div>
        </div>  
      </div>
    </div>    
  )
}

export default Register


