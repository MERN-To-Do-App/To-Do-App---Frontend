import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="container">
      <h1>Hello, Welcome to To Do App</h1>
      <div className="login">
      <p className="para-text">Already a user?</p>
        <Link to="/login">
          <button className="btn btn-lg btn-outline-secondary rounded-pill">Log in</button>
        </Link>
      </div>
      <div className="signup">
      <p className="para-text">New user?</p>
        <Link to="/signUp">
          <button className="btn btn-lg btn-outline-secondary rounded-pill">Sign up</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
