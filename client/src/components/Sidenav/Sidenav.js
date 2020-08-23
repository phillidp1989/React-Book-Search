  
import React, { useEffect } from 'react';
import M from 'materialize-css';
import './style.css'

function Sidenav() {
    useEffect(() => {        
        M.AutoInit();
      }, []);
    
    return (
        <React.Fragment>
            <ul className="sidenav purple lighten-4" id="mobile-demo">
            <li><a href="/search">Search</a></li>
            <li><a href="/savedbooks">Saved</a></li>
            <li><a href="http://localhost:3001/logout"><i className="fas fa-sign-out-alt"></i></a></li>
    </ul>
        </React.Fragment>
    )
}

export default Sidenav

