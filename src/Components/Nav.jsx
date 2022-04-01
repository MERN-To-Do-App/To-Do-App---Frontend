import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
       <nav className="navbar navbar-expand-lg navbar-light bg-primary">

           <Link className="nav-link active" aria-current="page" to="#" style={{color:'White'}}>To DO</Link>
         <form className="d-flex" >
           <input className="form-control-sm" aria-label=".form-control-sm example" type="search" placeholder="Search"/>
           <button className="btn btn-light btn-sm btn-outline-success" type="submit">Search</button>
         </form>
    
      </nav>
    </div>
  )
}

export default Nav

