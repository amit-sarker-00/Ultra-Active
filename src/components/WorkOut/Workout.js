import React from "react";
import "./Workout.css";
const Workout = (props) => {
  //   console.log(props);
  const { picture, age, name, time } = props.fit;
  return (
    <div className="cart">
      <img className="img" src={picture} alt="" />
      <div>
        <h2>Name:{name}</h2>
        <p>
          <strong>For Age:{age}</strong>
        </p>
        <p>
          <strong>Time Required :{time}</strong>
        </p>
      </div>
      <button className="cart-btn">Add To LIst</button>
    </div>
  );
};

export default Workout;
