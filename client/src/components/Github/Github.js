import React from 'react';
import './style.css';

function Github() {  

  return (
    <div className="loginButton">      
      <a className="waves-effect waves-light btn grey darken-3" href='http://localhost:3001/auth/github'>
      <i className="fab fa-github"></i> Sign in with Github</a>      
    </div>
  )
}

export default Github
