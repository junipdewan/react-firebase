import React, { useEffect, useState } from 'react';
import app from '../firebase/config'

export const AuthContext = React.createContext();
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setPending(true)
      if (user) {
        console.log("__",user)
        setCurrentUser(user)
        setPending(false)
      } else {
        console.log("err",user)
        setCurrentUser(null)
        setPending(false)
      }
    });
  }, []);

  if(pending){
    return <>Verifying Login.....</>
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};