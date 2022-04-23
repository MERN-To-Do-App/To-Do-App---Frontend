import React, { useState, useEffect } from "react";
import Todoitems from "./TodoItems";
import { isUndefined } from "lodash";
import axios from "axios";

function AddTodo({ id, user, title, items, setItems, getUser }) {
  const [itemName, setItemName] = useState("");

  const TaskEvent = (e) => {
    const val = e.target.value;
    setItemName(val);
  };

  const addItems = () => {
    if (itemName === "") return;
    axios
      .post(`${process.env.REACT_APP_API_ENDPOINT}/api/user/${id}/item`, {
        itemName: itemName,
        listName: isUndefined(title) ? "My Day" : title,
      })
      .then((res) => {
        // console.log(res.data);
        getUser();
      })
      .catch((error) => {
        console.log(error.response);
      });
    setItemName("");
  };

  const deleteItems = (itemId) => {
    axios
      .delete(`${process.env.REACT_APP_API_ENDPOINT}/api/user/${id}/item`, {
        data: { itemId: itemId, listName: isUndefined(title) ? "My Day" : title },
      })
      .then((res) => {
        // console.log(res.data);
        getUser();
      })
      .catch((error) => {
        console.log(error.response);
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
  }, [user.lists, title, setItems]);

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
      {items.length > 0 &&
        items
          .slice(0)
          .reverse()
          .map((item, index) => {
            return (
              <Todoitems
                key={item._id}
                id={item._id}
                text={item.name}
                deleteItems={deleteItems}
              />
            );
          })}
    </div>
  );
}

export default AddTodo;
