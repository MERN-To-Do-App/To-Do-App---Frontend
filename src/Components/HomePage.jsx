import React from 'react'
import {Link} from 'react-router-dom'
function HomePage() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">

     
      
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#"  role="button" data-bs-toggle="dropdown" style={{color:'White'}} >
            Menu
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="#">My Day</Link></li>
            <li><Link className="dropdown-item" to="#">Important</Link></li>
            <li><Link className="dropdown-item" to="#">Planned</Link></li>
            <li><Link className="dropdown-item" to="#">Assign To Me</Link></li>
            <li><Link className="dropdown-item" to="#">Task</Link></li>

          </ul>
       </li>

        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#" style={{color:'White'}}>To DO</Link>
        </li>
        <form className="d-flex" >
        <input className="form-control-sm" aria-label=".form-control-sm example" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-light btn-sm btn-outline-success" type="submit">Search</button>
      </form>

    </ul>
      </nav>
    </div>
  )
}

export default HomePage
