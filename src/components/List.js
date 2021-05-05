import React, { useState, useEffect } from "react";
import Card from "./card";

export default function List({ name }) {
  const [list, setList] = useState([]);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [cardItem, setCardItem] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [counter, setCounter] = useState(-1);

  function handleAddLists(e) {
    let errorText = "";
    let showStatus = false;
    if (list.length > 4) {
      errorText = "* Maximum product limit reached.";
    } else {
      errorText = "";
      //
      showStatus = true;
    }
    setError(errorText);
    setShowForm(showStatus);
  }

  function AddLists(cardContent) {
    setList([...list, cardContent]);
  }
  function handleClearAll(e) {
    setError("");
    setList([]);
  }
  function handleTitleChange(e) {
    e.preventDefault();
    setTitle(e.target.value);
  }
  function handleDescChange(e) {
    e.preventDefault();
    setDesc(e.target.value);
  }
  function handleSave(e) {
    AddLists({ title, desc, id: counter + 1 });
    setCounter(counter + 1);
    setShowForm(false);
    setTitle("");
    setDesc("");
  }
  function handleDeleteItem(e) {
    console.log(e.target.value);
    const newList = list.filter(el => el.title !== e.target.value);
    setList([...newList]);
  }
  return (
    <div className="card">
      <div className="cardHeader">
        {name}{" "}
        <button className="addButton" onClick={handleAddLists}>
          {" "}
          Add {name}
        </button>
        <span
          style={{
            fontStyle: "normal",
            float: "right",
            fontFamily: "monospace"
          }}
        >
          <button className="crossButton" onClick={handleClearAll}>
            x
          </button>
        </span>
      </div>
      <p className="errorText">{error ? error : ""}</p>
      {showForm && (
        <div>
          <div style={{ margin: "5px 0px" }}>
            <input
              type="text"
              name="title"
              placeholder="enter title here"
              value={title}
              onChange={handleTitleChange}
            ></input>
          </div>
          <div>
            <textarea
              type="text"
              name="desc"
              placeholder="enter desc here"
              value={desc}
              onChange={handleDescChange}
            ></textarea>
          </div>
          <div>
            <button
              style={{ margin: "0px 10px 0px 0px" }}
              className="saveButton"
              onClick={handleSave}
            >
              Save {name}
            </button>
            <button className="saveButton" onClick={() => setShowForm(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
      <hr className="line" />
      {list && list.length > 0 ? (
        list.map(item => (
          <Card
            key={item.id}
            id={item.id}
            cardItem={item}
            deleteItem={handleDeleteItem}
          />
        ))
      ) : (
        <p> Start by adding {name}</p>
      )}
    </div>
  );
}
