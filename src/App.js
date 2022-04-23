import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./Components/HomePage";
import LoginPage from "./Components/LoginPage";
import SignUpForm from "./Components/SignUpForm";
import LandingPage from "./Components/LandingPage";
import Copyright from "./Components/Copyright";
import "./App.css";
import { Redirect } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginPage setUser={setUser} />
        </Route>
        <Route path="/signUp">
          <SignUpForm setUser={setUser} />
        </Route>
        <Route path="/user/:id/:title">
          {user ? (
            <HomePage user={user} setUser={setUser} />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route path="/user/:id">
          {user ? (
            <HomePage user={user} setUser={setUser} />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route exact path="/" component={LandingPage} />
      </Switch>
      <Copyright />
    </Router>
  );
}

export default App;
