import React from "react";
import "./Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSprout } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import Fitness from "../Fitness/Fitness";
import Question from "../Question/Question";

const Main = () => {
  const showToastMessage = () => {
    toast.success("Hurrah! I have done it.", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
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
        <div className="my-info">
          <img
            src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt=""
          />
          <div className="my-data">
            <h3>Amit Sarker</h3>
            <h5>Dhaka,Bangladesh</h5>
          </div>
        </div>
        <div className="personal-info">
          <div>
            <h2>50kg</h2>
            <p>
              <strong>Weight</strong>
            </p>
          </div>
          <div>
            <h2>5.4</h2>
            <p>
              <strong>Height</strong>
            </p>
          </div>
          <div>
            <h2>20</h2>
            <p>
              <strong>Age</strong>
            </p>
          </div>
        </div>
        <div className="break-section">
          <h3>Add A Break</h3>
          <div className="break">
            <button>5s</button>
            <button>15s</button>
            <button>25s</button>
            <button>45s</button>
            <button>55s</button>
          </div>
        </div>
        <div className="exercise">
          <h3>Exercise Section</h3>
          <div className="break-seconds">
            <h4>
              Exercise Time <small>0 seconds</small>
            </h4>
          </div>
          <div className="break-seconds">
            <h4>
              Break Time <small>0 seconds</small>
            </h4>
          </div>
        </div>
        <div className="btn">
          <h4 onClick={showToastMessage}>Activity Completed</h4>
          <ToastContainer></ToastContainer>
        </div>
      </div>
      <Question></Question>
    </div>
  );
};

export default Main;
