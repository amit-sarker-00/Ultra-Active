import React, { useEffect, useState } from "react";
import Workout from "../WorkOut/Workout";
import "./Fitness.css";

// fake data
const Fitness = ({ clickHandel }) => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);

  return (
    <div className="cart-details">
      {datas.map((fit) => (
        <Workout key={fit.id} fit={fit} clickHandel={clickHandel}></Workout>
      ))}
    </div>
  );
};

export default Fitness;
