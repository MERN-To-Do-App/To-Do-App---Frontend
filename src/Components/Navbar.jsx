import React, { useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Link } from "react-router-dom";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import DeleteIcon from '@mui/icons-material/Delete';

import "./styles/Navbar.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
function Navbar({ id, user, sideBarData, setSideBarData }) {
  const [sidebar, setSidebar] = useState(false);
  const [newList, setNewList] = useState("");
  const showSidebar = () => setSidebar(!sidebar);
  const history = useHistory();

  

  function addList(e) {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_API_ENDPOINT}/api/user/${id}/list`,{listName:newList})
    .then(res=>{
      console.log(res.data.msg);
      setNewList("")
      history.push(`/user/${id}/${newList}`)
    })
    .catch(error=>{
      console.log(error);
    })
  }

  function deleteList(e){
    const listId = e.target.parentElement.parentElement.name
    axios.delete(`${process.env.REACT_APP_API_ENDPOINT}/api/user/${id}/list`,{data:{id:listId}})
    .then(res=>{
      console.log(res.data.msg)
      history.push(`/user/${id}/${listId}`)
      history.push(`/user/${id}/`)
    })
    .catch(error=>{
      console.log(error.response);
    })
  }

  return (
    <div className="nav-side-container col-3">
      <div className={sidebar ? "navbar nav-side on" : "navbar nav-side"}>
        <Link to="#">
          <MenuRoundedIcon fontSize="large" onClick={showSidebar} />
        </Link>
      </div>
      <div className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          {sideBarData.map((item, index) => {
            return (
              <li key={index} className={item.name+" list-item"}>
                <Link
                  to={
                    `/user/${id}/` + (item.name === "My Day" ? "" : item.name)
                  }
                >
                  {<TaskAltIcon />}
                  <span> {item.name} </span>
                </Link>
                <button onClick={deleteList} name={item._id} className="delete-list"><DeleteIcon/></button>
              </li>
            );
          })}
          <li>
            <form>
              <input
                onChange={(e) => {
                  setNewList(e.target.value);
                }}
                className="add-list text-light"
                type="text"
                name="listName"
                value={newList}
                id="list-input"
              />
              <button onClick={addList} className="btn btn-outline-light add">
                +
              </button>
            </form>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
