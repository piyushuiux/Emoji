import React from "react";

function Card(props) {
  return (
    <div className="grid">
      <div className="card">
        <h1>{props.emoji}</h1>
        <h1>{props.tital}</h1>
        <p>{props.detail}</p>
      </div>
    </div>
  );
}

export default Card;
