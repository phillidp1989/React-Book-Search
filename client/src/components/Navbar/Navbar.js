import React from 'react';

function Navbar() {
    return (
        <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper indigo darken-3">
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"
            ><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li><a href="/search">Search</a></li>
            <li><a href="/savedbooks">Saved</a></li>
            <li><a href="http://localhost:3001/logout"><i className="fas fa-sign-out-alt"></i></a></li>              
            
          </ul>
        </div>
      </nav>
    </div>
    )
}

export default Navbar;
