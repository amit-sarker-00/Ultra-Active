import React from "react";
import "./Workout.css";
const Workout = (props) => {
  //   console.log(props);
  const { picture, age, name, describe, time } = props.fit;
  // const { clickHandel } = props;
  return (
    <div className="cart">
      <img className="img" src={picture} alt="" />
      <div>
        <h3>Name:{name}</h3>
        <p>
          <small>{describe}</small>
        </p>
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
// onClick={() => props.clickHandel(time)}
