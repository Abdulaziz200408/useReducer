import React from "react";

function Question({ question, index }) {
  return (
    <div>
      {question[index].options.map((option, i) => (
        <button className="btn" key={i}>
          {option}
        </button>
      ))}
    </div>
  );
}

export default Question;
