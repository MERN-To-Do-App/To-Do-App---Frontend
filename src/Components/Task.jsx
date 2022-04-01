import React from 'react'
import AddTodo from './AddTodo'
import Nav from './Nav'
import Navbar from './Navbar'

function Task() {
  return (
    <div>
      <Nav/>
      <h2>Task..</h2>
      <AddTodo/>
      <Navbar/>
    </div>    
  )
}

export default Task
