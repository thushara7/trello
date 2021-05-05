import React from "react";
import Card from "./card";
export default function TeamList() {
  return (
    <div className="card">
      <div className="cardHeader">
        Teams
        <button className="addButton"> Add Team</button>
        <span
          style={{
            fontStyle: "normal",
            float: "right",
            fontFamily: "monospace"
          }}
        >
          <button className="crossButton">x</button>
        </span>
      </div>
      <hr className="line" />
      <Card />
    </div>
  );
}
