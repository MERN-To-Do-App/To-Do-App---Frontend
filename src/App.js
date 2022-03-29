import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LoginPage from "./Components/LoginPage";
import SignUpForm from "./Components/SignUpForm";
import LandingPage from "./Components/LandingPage";
import Copyright from "./Components/Copyright";
import Home from "./Components/home"
import './App.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/signUp" component={SignUpForm} />
        <Route path="/user" component={Home} />
        <Route exact path="/" component={LandingPage} />
      </Switch>
      <Copyright/>
    </Router>
  );
}

export default App;
