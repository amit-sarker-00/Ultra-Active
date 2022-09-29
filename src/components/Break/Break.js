import React from "react";
import "./Break.css";
const Break = (props) => {
  const { time } = props.time;
  return (
    <div>
      <div className="break">
        <button>{time}</button>
      </div>
    </div>
  );
};

export default Break;
