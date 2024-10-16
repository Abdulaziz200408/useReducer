import React from "react";
import "../index.css";

function Startscreen({ numQuestion, dispatch }) {
  return (
    <div className="start">
      <p>React viktorinasiga xush kelibsiz</p>
      <p>{numQuestion} Sizni sinab ko'rish uchun savol</p>
      <button onClick={() => dispatch({ type: "start" })}>Start</button>
    </div>
  );
}

export default Startscreen;
