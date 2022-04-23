import axios from "axios";
import React, { useState } from "react";
import {Link, useHistory} from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUpForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confpass, setconfPass] = useState("");


  const history = useHistory()
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const userinfo = {
      name: name,
      email: email,
      password: pass,
      confirmPassword: confpass
    };

    axios.post(`${process.env.REACT_APP_API_ENDPOINT}/api/signUp`, userinfo)
    .then((res) => {
      const id = res.data.user._id
      props.setUser(res.data.user)
      history.push(`/user/${id}`)
    })
    .catch((error)=>{
      const errorMsg = error.response.data.msg
      toast.error(errorMsg, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        });
    })

    setName("");
    setEmail("");
    setPass("");
    setconfPass("");
  };

  return (
    <div className="container signup-container">
      <h3 className="signup-text"> Sign Up</h3>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          className="form-control form-control-sm"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Full Name"
          required
        />

        <input
          className="form-control form-control-sm"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
          required
        />

        <input
          className="form-control form-control-sm"
          type="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="Enter Password"
          required
        />

        <input
          className="form-control form-control-sm"
          type="Password"
          value={confpass}
          onChange={e=>setconfPass(e.target.value)}
          placeholder="Confirm Password"
          required
        />
        <button
          type="submit"
          className="btn btn-lg btn-outline-dark rounded-pill"
        >
          Sign Up
        </button>
        <ToastContainer closeOnClick />
        <div className="form-row">
          <div className="form-group col-md-12 foot-text">
            <p>
              Already have an account ?
              <Link to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
