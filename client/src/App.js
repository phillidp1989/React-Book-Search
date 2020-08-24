import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import PrivateRoute from "./hocs/PrivateRoute";
import LoginPrivate from "./hocs/LoginPrivate";

function App() {
  return (
    <div>
      <Router>
        <Switch />
        <Route path="/" to="/login" />
        <LoginPrivate path="/login" component={Login} />
        <PrivateRoute path="/search" component={Search} />
        <PrivateRoute path="/savedbooks" component={Saved} />
        <Switch />
      </Router>
    </div>
  );
}

export default App;
