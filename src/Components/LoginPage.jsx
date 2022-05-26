import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const userinfo = {
      email: email,
      password: pass,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    };

    axios
      .post(`${process.env.REACT_APP_API_ENDPOINT}/api/login`, userinfo)
      .then((res) => {
        const id = res.data.user._id;
        props.setUser(res.data.user);
        history.push(`/user/${id}`);
      })
      .catch((error) => {
        toast.error("Invalid email / password", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
        });
      });

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
          className="btn btn-lg btn-outline-dark rounded-pill"
        />
        <ToastContainer closeOnClick />
        <div className="form-row">
          <div className="form-group col-md-12 foot-text">
            <p>
              New User?
              <Link to="/signUp">Sign Up</Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
