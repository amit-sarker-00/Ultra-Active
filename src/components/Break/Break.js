import React from "react";
import "./Break.css";
const Break = (props) => {
  const { time } = props.time;
  // console.log(props);
  return (
    <div>
      <div className="break">
        <button onClick={() => props.clickBreakButton(time)}>{time}</button>
      </div>
    </div>
  );
};

export default Break;
