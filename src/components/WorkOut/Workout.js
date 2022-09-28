import React from "react";
import "./Workout.css";
const Workout = (props) => {
  console.log(props);
  const { picture, age, name } = props.fit;
  return (
    <div>
      <img className="img" src={picture} alt="" />
      <h2>Name:{name}</h2>
      <p>age:{age}</p>
      {/* <p></p> */}
    </div>
  );
};

export default Workout;
