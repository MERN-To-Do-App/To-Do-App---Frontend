import React from 'react'
import AddTodo from './AddTodo'
import Nav from './Nav'
import Navbar from './Navbar'

function AssignToMe() {
  return (
    <div>
      <Nav/>
      <h2>Assign To Me..</h2>
      <AddTodo/>
      <Navbar/>
    </div>    
  )
}

export default AssignToMe
