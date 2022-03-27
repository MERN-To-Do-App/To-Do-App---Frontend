import React, { useState } from 'react'

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


    setEmail('')
    setPass('')
  }

  return (
    <div className='container'>
      <br /> 
      <h3 className='text-success'>USER LOGIN</h3>
      <br /> <br /> <br />
      <form onSubmit={handleSubmit}>
        <input type="email"
        className="form-control form-control-sm"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="ENTER EMAIL"
          required />
             <br />

        <input type="password"
        className="form-control form-control-sm"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="ENTER PASSWORD"
          required />
        <br />
        <input type="submit" value="LOGIN" className="btn btn-success" />
      </form>
    </div>
  )
}

export default LoginPage