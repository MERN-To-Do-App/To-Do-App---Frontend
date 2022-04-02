<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./Components/HomePage";
=======
import React, { useState } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
>>>>>>> d9069de1392dfd363a85c6c67aef1ee3129c5449
import LoginPage from "./Components/LoginPage";
import SignUpForm from "./Components/SignUpForm";
import LandingPage from "./Components/LandingPage";
import Copyright from "./Components/Copyright";
import Home from "./Components/DemoHome"
import './App.css'
import Planned from "./Components/Planned";
import Important from "./Components/Important";
import AssignToMe from "./Components/AssignToMe";
import Task from "./Components/Task";



function App() {

  const [user, setUser] = useState({});

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
<<<<<<< HEAD
        <Route path="/"        component={LandingPage} />
  
=======
        <Route path="/user/:id">
          <Home user={user} setUser={setUser}/>
        </Route>
        <Route exact path="/" component={LandingPage} />
>>>>>>> d9069de1392dfd363a85c6c67aef1ee3129c5449
      </Switch>
      <Copyright/>
    </Router>
   
  );
}

export default App;
