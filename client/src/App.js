import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import PrivateRoute from "./hocs/PrivateRoute";
import LoginPrivate from "./hocs/LoginPrivate";

function App() {
  return (
    <div>
      <Router>
        <Route path="/">
          <Redirect to="/login" />
        </Route>   
        <LoginPrivate exact path="/login" component={Login} />
        <PrivateRoute exact path="/search" component={Search} />
        <PrivateRoute exact path="/savedbooks" component={Saved} />
      </Router>
    </div>
  );
}

export default App;
