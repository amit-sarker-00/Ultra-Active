import React from "react";
import Workout from "../WorkOut/Workout";
import "./Fitness.css";
const Fitness = () => {
  const fitness = [
    {
      id: "633467207ae6b88f6bbf92b3",
      picture:
        "https://www.kreedon.com/wp-content/uploads/2021/08/oYDbf5hQAePHEBNZTQMXRA.jpg",
      age: "25-30",
      name: "Pushups",
      time: "30s",
    },
    {
      id: "6334672050258a85cc3b951d",
      picture:
        "https://eisnerfitness.com/wp-content/uploads/2021/12/frontsquat.jpg",
      age: "25-35",
      name: "Squats",
      time: "20s",
    },
    {
      id: "63346720a5fe44284512dfc6",
      picture:
        "https://d3h9ln6psucegz.cloudfront.net/wp-content/uploads/2022/03/Dumbbell-Row.jpg",
      age: "22-40",
      name: "Dumbbell rows",
      time: "40s",
    },
    {
      id: "633467201e9c57a4c7b262b5",
      picture:
        "https://hips.hearstapps.com/hmg-prod/images/2019-menshealth-formcheck-ep38-singlelegdeadlift-ms-mo-edit-v1-00-00-20-15-still007-1568827173.jpg",
      age: "25-45",
      name: "Single-leg deadlifts",
      time: "15s",
    },
    {
      id: "63346720aa77469e2bc18c4b",
      picture:
        " https://images.unsplash.com/photo-1474859740426-f0db7f4f5d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      age: "25-35",
      name: "Basketball",
      time: "30s",
    },
    {
      id: "6334672045f711a9a0df879e",
      picture:
        "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/03/27/16483840772910.jpg",
      age: "20-30",
      name: "Side squats",
      time: "35s",
    },
    {
      id: "63346720098eeba5f48545de",
      picture:
        "https://www.muscleandperformance.com/wp-content/uploads/2018/03/pull-ups-for-bigger-back.jpg?width=730",
      age: "20-45",
      name: "Pull-ups",
      time: "30s",
    },
    {
      id: "6334672023d1dad2a9852d35",
      picture:
        "https://images.askmen.com/1080x540/2021/04/01-125259-how_to_use_a_foam_roller.jpg",
      age: "25-35",
      name: "Foam Roller",
      time: "30s",
    },
    {
      id: "633467208785407dcee1a0a7",
      picture:
        "https://www.muscleandfitness.com/wp-content/uploads/2019/03/barbell-bentover-row-1109.jpg?quality=86&strip=all",
      age: "20-30",
      name: "Bent-over",
      time: "30s",
    },
  ];
  return (
    <div className="cart-details">
      {fitness.map((fit) => (
        <Workout key={fit.id} fit={fit}></Workout>
      ))}
    </div>
  );
};

export default Fitness;
