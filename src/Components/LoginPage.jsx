import React, { useState } from "react";
import axios from "axios";
import {Link, useHistory} from 'react-router-dom'

function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isError, setIsError] = useState("");
  const history = useHistory()

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const userinfo = {
      email: email,
      password: pass
    }

    axios.post(`${process.env.REACT_APP_API_ENDPOINT}/api/login`, userinfo)
    .then((res) => {
      const id = res.data.user._id
      history.push(`/user/${id}`)
    })
    .catch((error)=>{
      setIsError("Invalid email / password")
    })

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
        <div className="error-text text-danger">{isError}</div>
        <input
          type="submit"
          value="Log In"
          className="btn btn-lg btn-outline-dark rounded-pill"
        />
        <div className="form-row">
          <div className="form-group col-md-12 foot-text">
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
