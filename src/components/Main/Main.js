import "./Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSprout } from "@fortawesome/free-solid-svg-icons";
import Fitness from "../Fitness/Fitness";
import Question from "../Question/Question";
import Cart from "../Cart/Cart";

const Main = () => {
  return (
    <div className="main-container">
      <div className="container">
        <h2>
          <FontAwesomeIcon icon={faSprout} /> FITNESS CLUB
        </h2>
        <h4>Select Today's Choice</h4>
        <Fitness></Fitness>
      </div>
      <div className="right-container">
        <Cart></Cart>
      </div>
      <Question></Question>
    </div>
  );
};

export default Main;
