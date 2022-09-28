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
      </div>
      <div className="right-container">Hello i'm from right bar</div>
    </div>
  );
};

export default Main;
