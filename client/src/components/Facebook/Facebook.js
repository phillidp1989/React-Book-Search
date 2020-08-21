import React, {useState, useEffect} from 'react';
import Axios from 'axios';

function Facebook() {

const [user, setUser] = useState({});

const getUser = async () => {
  try {
    const result = await Axios.get('/api/user', {withCredentials: true});
    console.log(result.data.user);
    setUser({...user, displayName: result.data.user.displayName});
    console.log(user);
  } catch (err) {
    console.error("ERROR - facebook.js - getUser", err);
  }
  
}

useEffect(() => {
  getUser();  
}, []);

  return (
    <div className="loginButton">      
      <a className="waves-effect waves-light btn blue darken-3" href='http://localhost:3001/auth/facebook'>
      <i className="fab fa-facebook"></i> Sign in with facebook</a>      
    </div>
  )
}

export default Facebook