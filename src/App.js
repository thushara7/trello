import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import List from "./components/List";
function App() {
  //states
  const localStorageKey = "list";
  const [listName, setListName] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [listArr, setListArr] = useState([]);

  //effects
  useEffect(() => {
    setListArr(JSON.parse(localStorage.getItem(localStorageKey)) || []);
  }, []);
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(listArr));
  }, [listArr]);

  //handler: onchange event of list name input
  function handleListNameChange(e) {
    e.preventDefault();
    setListName(e.target.value);
  }
  //handler: onsave list
  function handleSave(e) {
    setShowForm(false);
    setListArr([...listArr, listName]);
    setListName("");
  }

  //handler: ondelete list
  function handleDeleteEntireLists(e) {
    const newList = listArr.filter(el => el !== e.target.name);
    setListArr([...newList]);
  }

  //handler: oncancel button
  function handleCancel() {
    setShowForm(false);
    setListName("");
  }
  return (
    <div className="App">
      <Header />
      <button className="addListButton" onClick={() => setShowForm(true)}>
        Add List
      </button>
      <div>
        {showForm && (
          <div className="addListContents">
            <input
              placeholder="Enter list name"
              name="listName"
              value={listName}
              onChange={handleListNameChange}
              style={{ margin: "0px 10px" }}
            ></input>
            <button
              style={{ margin: "0px 10px 0px 0px" }}
              className={listName ? "saveButton" : "disabledButton"}
              onClick={handleSave}
              disabled={!listName}
            >
              Save List
            </button>
            <button className="saveButton" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        )}
      </div>
      {listArr && listArr.length > 0 ? (
        <div className="List">
          {listArr.map(item => (
            <List
              name={item}
              key={item}
              handleDeleteEntireLists={handleDeleteEntireLists}
            />
          ))}
        </div>
      ) : (
        <p style={{ textAlign: "center", fontSize: "16px", color: "darkgray" }}>
          Add list to start
        </p>
      )}
    </div>
  );
}

export default App;
