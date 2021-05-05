import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import List from "./components/List";
function App() {
  const localStorageKey = "list";
  const [listName, setListName] = useState("");
  const [showForm, setShowForm] = useState(false);

  const [listArr, setListArr] = useState([]);
  useEffect(() => {
    setListArr(JSON.parse(localStorage.getItem(localStorageKey)));
  }, []);
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(listArr));
  }, [listArr]);
  function handleListNameChange(e) {
    e.preventDefault();
    setListName(e.target.value);
  }

  function handleSave(e) {
    setShowForm(false);
    setListArr([...listArr, listName]);
    setListName("");
  }
  function handleDeleteEntireLists(e) {
    console.log(e.target.name);
    const newList = listArr.filter(el => el !== e.target.name);
    setListArr([...newList]);
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
              className="saveButton"
              onClick={handleSave}
            >
              Save List
            </button>
            <button className="saveButton" onClick={() => setShowForm(false)}>
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
        <p>Add list to start</p>
      )}
    </div>
  );
}

export default App;
