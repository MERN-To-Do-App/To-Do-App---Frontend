import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import _ from 'lodash'

import AddTodo from './AddTodo'
import Navbar from './Navbar'
import "./styles/HomePage.css"
import Nav from './Nav'
function HomePage({user, setUser}) {

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const [sideBarData, setSideBarData] = useState([...user.lists]);
  const { id, title } = useParams();
  useEffect(() => {
    function getUser(){
      axios
        .get(`${process.env.REACT_APP_API_ENDPOINT}/api/user/${id}`)
        .then((res) => {
          const userDetails = res.data.user;
          console.log('got user');
          setUser(userDetails);
          setSideBarData([...userDetails.lists])
        })
        .catch((error) => {
          console.log(error.response);
        });
    }
    getUser()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title]);



  return (
    <div>
        <Nav setUser={setUser} />
        <Navbar id={id} user={user} sideBarData={sideBarData} setSideBarData={setSideBarData}/>
        <h2 className='title-text'>{title ? _.capitalize(title) : `Hello ${user.name.split(" ")[0]}, Happy ${days[new Date().getDay()]}`}</h2>
        <br/>
        <AddTodo id={id} user={user} title={title}/>
      
    </div> 
  )
}

export default HomePage
      
          
      
