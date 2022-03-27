import React, { useState } from 'react'
import './App.css'
function SignUpForm() {

  const [name, setName] = useState("");
  const [isError, setIsError] = useState("");
  const [email, setEmail] = useState("");; 
  const [pass, setPass] = useState("");
  const [confpass,setconfPass] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(`Registered Successfully:`);
    console.log(`NAME: ${name}`);
    console.log(`EMAIL: ${email}`);

    const userinfo = {
        username: name,
        useremail: email,
        userpass: pass,
        userconfpass: confpass       
    }

    setName('')
    setEmail('')
    setPass('')
    setconfPass('')

}
const checkpassword = (e) => {
  setconfPass(e.target.value);
  if(pass !== confpass){
    setIsError("Password is not Matched");
  }
  else{
    setIsError("");
  }
}


  return (
    <div style={{padding:'5px',width:'300px', margin: 'auto'}}>
      
        <h3 style={{padding:'5px',color:'blue'}}> SignUp</h3>
        <br/>
      <form onSubmit={handleSubmit}>
    <label>Name:</label>
      <input className="form-control form-control-sm" type="text" value={name}
                    onChange={(e) => setName(e.target.value)} placeholder="Enter Full Name" required/>

      <label>Email:</label>
      <input className="form-control form-control-sm" type="email"  value={email}
                    onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email"  required/>

      <label>Create Password:</label>
      <input className="form-control form-control-sm" type="Password"  value={pass}
                    onChange={(e) => setPass(e.target.value)} placeholder="Enter Password"  required/>
     
     <label>Confirm Password:</label>
      <input className="form-control form-control-sm" type="Password"  value={confpass}
                    onChange={(e) => checkpassword(e)} placeholder="Confirm Password"  required/>
     <div style={{color:'red'}}>
      {isError}
     </div>
     <br></br>
      <button type="submit" className="btn btn-primary">Sign Up</button>
      </form>
    </div>
  )
}

export default SignUpForm
