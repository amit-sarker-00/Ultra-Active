import React, { useState } from "react";
import "./Cart.css";
import { ToastContainer, toast } from "react-toastify";
import Break from "../Break/Break";

const Cart = ({ x }) => {
  const [times, setTimes] = useState([]);
  const showToastMessage = () => {
    toast.success("Hurrah! I have done it.", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const breakTime = [
    { id: 1, time: "15 second" },
    { id: 2, time: "25 second" },
    { id: 3, time: "35 second" },
    { id: 4, time: "55 second" },
  ];
  const clickBreakButton = (time) => {
    // const newTime = [...times, time];
    setTimes(time);
    const x = localStorage.getItem("time");
    const y = JSON.parse(x);
    if (!y) {
      localStorage.setItem("time", JSON.stringify([time]));
      return;
    } else {
      const a = y.find((i) => i.id === time.id);
      console.log(a);

      localStorage.setItem("time", JSON.stringify([time]));
    }
  };
  return (
    <div>
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
        <div className="break">
          <h3>Add A Break</h3>
          {breakTime.map((time) => (
            <Break
              key={time.id}
              time={time}
              clickBreakButton={clickBreakButton}
            ></Break>
          ))}
        </div>
      </div>
      <div className="exercise">
        <h3>Exercise Section</h3>
        <div className="break-seconds">
          <h4>
            Exercise Time <small>{x} second</small>
          </h4>
        </div>
        <div className="break-seconds">
          <h4>
            Break Time <small> {times}</small>
          </h4>
        </div>
      </div>
      <div className="btn">
        <h4 onClick={showToastMessage}>Activity Completed</h4>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default Cart;
