import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="card">
      <h1>Hello, Welcome to To Do App</h1>
      <div className="login">
      <p>Already a user?</p>
        <Link to="/login">
          <button>Log in</button>
        </Link>
      </div>
      <div className="signup">
      <p>New user?</p>
        <Link to="/signUp">
          <button>Sign up</button>
        </Link>
      </div>
      
    </div>
  );
}

export default LandingPage;