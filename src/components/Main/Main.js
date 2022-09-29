import "./Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSprout } from "@fortawesome/free-solid-svg-icons";
import Fitness from "../Fitness/Fitness";
import Question from "../Question/Question";
import Cart from "../Cart/Cart";
import { useState } from "react";

const Main = () => {
  const [cart, setCart] = useState([]);
  const clickHandel = (fit) => {
    const x = parseInt(fit.slice(0, 2));
    const newCart = [...cart, x];
    setCart(newCart);
  };
  const x = cart?.reduce((previous, current) => previous + current, 0);
  return (
    <div className="main-container">
      <div className="container">
        <h2>
          <FontAwesomeIcon icon={faSprout} /> FITNESS CLUB
        </h2>
        <h4>Select Today's Choice</h4>
        <Fitness clickHandel={clickHandel}></Fitness>
      </div>
      <div className="right-container">
        <Cart x={x}></Cart>
      </div>
      <Question></Question>
    </div>
  );
};

export default Main;
