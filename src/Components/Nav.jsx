import React from "react";
import { Link, useParams } from "react-router-dom";
import Clock from "./Clock";

import "./styles/Nav.css";

function Nav({ setUser }) {
  const { id } = useParams();

  return (
    <div>
      <nav className="navbar nav-top navbar-expand-lg">
        <div className="brand">
          <img
            src="/images/ToDoIcon.png"
            alt="logo"
            className="brand-image"
          />
          <Link
            className="brand-name nav-link active"
            aria-current="page"
            to={`/user/${id}`}
          >
            To Do
          </Link>
        </div>
        <div className="nav-elements">
          <Clock />
          <Link
            className="nav-element-item nav-link"
            aria-current="page"
            to={`/`}
            onClick={() => {
              setUser(null);
            }}
          >
            Log out
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
