import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./Components/HomePage";
import LoginPage from "./Components/LoginPage";
import SignUpForm from "./Components/SignUpForm";
import LandingPage from "./Components/LandingPage";
import './App.css'
import Planned from "./Components/Planned";
import Important from "./Components/Important";
import AssignToMe from "./Components/AssignToMe";
import Task from "./Components/Task";



function App() {
  return (
    <Router>
      <Switch>
  
        <Route path ="/planned" component={Planned} />
        <Route path ="/important" component={Important} />
        <Route path ="/task" component={Task} />
        <Route path ="/tome" component={AssignToMe} />
        <Route path ="/todo" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signUp" component={SignUpForm} />
        <Route path="/"        component={LandingPage} />
  
      </Switch>
    </Router>
   
  );
}

export default App;
