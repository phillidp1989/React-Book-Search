import React, {useState, useEffect} from 'react';
import './style.css';
import Axios from 'axios';

function Google() {

const [user, setUser] = useState({});

const getUser = async () => {
  try {
    const result = await Axios.get('/api/user', {withCredentials: true});
    console.log(result.data.user);
    setUser({...user, displayName: result.data.user.displayName});
    console.log(user);
  } catch (err) {
    console.error("ERROR - Google.js - getUser", err);
  }
  
}

useEffect(() => {
  getUser();  
}, []);

  return (
    <div className="loginButton">      
      <a className="waves-effect waves-light btn red darken-2" href='http://localhost:3001/auth/google'>
      <i className="fab fa-google"></i> Sign in with Google</a>      
    </div>
  )
}

export default Google;
