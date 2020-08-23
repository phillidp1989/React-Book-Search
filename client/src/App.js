import React from 'react';
import './App.css';
import Login from './pages/Login';
import {BrowserRouter as Router, Route} from 'react-router-dom'; 
import Search from './pages/Search';
import Saved from './pages/Saved';

function App() {
  return (
    <div>
      <Router>        
        <Route exact path="/login">
        <Login />
        </Route>
        <Route exact path="/search">
        <Search /> 
       </Route>
       <Route exact path="/savedbooks">
        <Saved /> 
       </Route>
      </Router>
    </div>
  );
}

export default App;
