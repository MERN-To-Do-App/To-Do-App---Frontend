import axios from "axios";
import React from "react";

function home() {


  axios.get("http://localhost:5000/api/user")
  .then((res)=>{
    console.log(...res);
  })
  .catch((error)=>{
    console.log(...error);
  })
  

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

export default home;
