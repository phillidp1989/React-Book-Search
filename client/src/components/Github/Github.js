import React, {useState, useEffect} from 'react';
import './style.css';
import Axios from 'axios';

function Github() {

const [user, setUser] = useState({});

const getUser = async () => {
  try {
    const result = await Axios.get('/api/user', {withCredentials: true});
    console.log(result.data.user);
    setUser({...user, displayName: result.data.user.displayName});
    console.log(user);
  } catch (err) {
    console.error("ERROR - GitHub.js - getUser", err);
  }
  
}

useEffect(() => {
  getUser();  
}, []);

  return (
    <div className="loginButton">      
      <a className="waves-effect waves-light btn grey darken-3" href='http://localhost:3001/auth/github'>
      <i className="fab fa-github"></i> Sign in with Github</a>      
    </div>
  )
}

export default Github
