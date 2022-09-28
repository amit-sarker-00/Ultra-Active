import React from "react";
import Workout from "../WorkOut/Workout";

const Fitness = () => {
  const fitness = [
    {
      id: "633467207ae6b88f6bbf92b3",
      picture:
        "https://www.kreedon.com/wp-content/uploads/2021/08/oYDbf5hQAePHEBNZTQMXRA.jpg",
      age: "25-30",
      name: "Pushups",
    },
    {
      id: "6334672050258a85cc3b951d",
      picture:
        "https://eisnerfitness.com/wp-content/uploads/2021/12/frontsquat.jpg",
      age: "25-35",
      name: "Squats",
    },
    {
      id: "63346720a5fe44284512dfc6",
      picture:
        "https://d3h9ln6psucegz.cloudfront.net/wp-content/uploads/2022/03/Dumbbell-Row.jpg",
      age: "22-40",
      name: "Dumbbell rows",
    },
    {
      id: "633467201e9c57a4c7b262b5",
      picture:
        "https://hips.hearstapps.com/hmg-prod/images/2019-menshealth-formcheck-ep38-singlelegdeadlift-ms-mo-edit-v1-00-00-20-15-still007-1568827173.jpg",
      age: "25-45",
      name: "Single-leg deadlifts",
    },
    {
      id: "63346720aa77469e2bc18c4b",
      picture: " ",
      age: "25-35",
      name: "Burpees",
    },
    {
      id: "6334672045f711a9a0df879e",
      picture:
        "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/03/27/16483840772910.jpg",
      age: "20-30",
      name: "Side squats",
    },
    {
      id: "63346720098eeba5f48545de",
      picture:
        "https://www.muscleandperformance.com/wp-content/uploads/2018/03/pull-ups-for-bigger-back.jpg?width=730",
      age: "20-45",
      name: "Pull-ups",
    },
    {
      id: "6334672023d1dad2a9852d35",
      picture:
        "https://images.askmen.com/1080x540/2021/04/01-125259-how_to_use_a_foam_roller.jpg",
      age: "25-35",
      name: "Foam Roller",
    },
    {
      id: "633467208785407dcee1a0a7",
      picture:
        "https://www.muscleandfitness.com/wp-content/uploads/2019/03/barbell-bentover-row-1109.jpg?quality=86&strip=all",
      age: "20-30",
      name: "Bent-over",
    },
  ];
  return (
    <div>
      {fitness.map((fit) => (
        <Workout key={fit.id} fit={fit}></Workout>
      ))}
    </div>
  );
};

export default Fitness;
