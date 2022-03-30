import React, { useState } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import LoginPage from "./Components/LoginPage";
import SignUpForm from "./Components/SignUpForm";
import LandingPage from "./Components/LandingPage";
import Copyright from "./Components/Copyright";
import Home from "./Components/DemoHome"
import './App.css'

function App() {

  const [user, setUser] = useState({});

  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/signUp" component={SignUpForm} />
        <Route path="/user/:id">
          <Home user={user} setUser={setUser}/>
        </Route>
        <Route exact path="/" component={LandingPage} />
      </Switch>
      <Copyright/>
    </Router>
  );
}

export default App;
