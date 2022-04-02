import React from 'react'
import AddTodo from './AddTodo'
import Navbar from './Navbar'
import "./HomePage.css"
import Nav from './Nav'
function HomePage() {
  return (
    <div>
        <Nav/>
        <h2>My Day...</h2>
        <AddTodo/>
        <Navbar/>
      
    </div> 
  )
}

export default HomePage
      
          
      
