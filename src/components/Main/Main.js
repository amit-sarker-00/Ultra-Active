import React from "react";
import "./Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSprout } from "@fortawesome/free-solid-svg-icons";
const Main = () => {
  return (
    <div className="main-container">
      <div className="container">
        <h2>
          <FontAwesomeIcon icon={faSprout} /> FITNESS CLUB
        </h2>
        <h4>Select Today's Choice</h4>
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
      </div>
    </div>
  );
};

export default Main;
