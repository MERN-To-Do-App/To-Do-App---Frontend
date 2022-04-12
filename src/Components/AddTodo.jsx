import React, { useState, useEffect } from "react";
import Todoitems from "./TodoItems";
import { isUndefined } from "lodash";
import axios from "axios";

function AddTodo({ id, user, title }) {
  const [itemName, setItemName] = useState("");
  const [items, setItems] = useState([]);
  const TaskEvent = (e) => {
    const val = e.target.value;
    setItemName(val);
  };

  const addItems = () => {
    if(itemName==="") return;
    axios
      .post(`${process.env.REACT_APP_API_ENDPOINT}/api/user/${id}/item`, {
        itemName: itemName,
        listName: isUndefined(title) ? "My Day" : title,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
    setItems((oldItems) => {
      return [...oldItems, itemName];
    });
    setItemName("");
  };

  const deleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((val, index) => {
        return index !== id;
      });
    });
  };
  useEffect(() => {
    const newItems =
      user.lists.filter(
        (list) => list.name === (isUndefined(title) ? "My Day" : title)
      ).length === 0
        ? []
        : user.lists.filter(
            (list) => list.name === (isUndefined(title) ? "My Day" : title)
          )[0].items;
    setItems(newItems);
  }, [user.lists, title]);

  return (
    <div className="Todocontainer">
      <h2 className="add-new-heading">Add New Todo</h2>
      <div className="input-box">
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            autoComplete="off"
            value={itemName}
            onChange={TaskEvent}
            placeholder="enter item..."
          />
          <label htmlFor="floatingInput">Add New Task</label>
        </div>
        <button id="add-btn" onClick={addItems}>
          +
        </button>
      </div>
      {items.map((interval, index) => {
        return (
          <Todoitems
            key={index}
            id={index}
            text={interval}
            onSelect={deleteItems}
          />
        );
      })}
    </div>
  );
}

export default AddTodo;
