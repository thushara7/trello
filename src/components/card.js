import React from "react";

export default function card({ id, cardItem, deleteItem }) {
  return (
    <div>
      {cardItem && (
        <div className="cardItem">
          <div className="cardItemTitle">
            {cardItem["title"]}
            <span
              style={{
                fontStyle: "normal",
                float: "right",
                fontFamily: "monospace"
              }}
            >
              <button
                className="crossButton"
                value={cardItem.title}
                onClick={deleteItem}
              >
                x
              </button>
            </span>
          </div>
          <div className="cardDescription"> {cardItem["desc"]}</div>
        </div>
      )}
    </div>
  );
}
