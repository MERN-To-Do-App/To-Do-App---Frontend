import React, { useState } from "react";
import {Link} from 'react-router-dom'

function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();

    console.log(`EMAIL: ${email}`);
    console.log(`PASS: ${pass}`);

    // const userlogininfo = {
    //   useremail: email,
    //   userpass: pass
    // }

    setEmail("");
    setPass("");
  };

  return (
    <div className="container login-container">
      <br />
      <h3 className="user-login">Log In</h3>
      <br /> <br /> <br />
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          className="form-control form-control-sm"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
          required
        />

        <input
          type="password"
          className="form-control form-control-sm"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="Enter Password"
          required
        />
        <input
          type="submit"
          value="Log In"
          className="btn btn-lg btn-outline-success rounded-pill"
        />
        <div class="form-row">
          <div class="form-group col-md-12 foot-text">
            <p>
              New User?
              <Link to="/signUp">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
