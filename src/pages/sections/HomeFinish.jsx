import React, { useState } from "react";
import "../../Styles/HomeFinish.scss";
import finisher1 from "../../assets/img/finishers1.svg";
import finisher2 from "../../assets/img/finishers2.svg";

const HomeFinish = () => {
  const [activeYear, setActiveYear] = useState("2021");

  return (
    <section className="finish-section">
      <div className="finish-section-content">
        <div className="finish-section-heading-container container">
          <h1 className="finish-section-title">Race Finishers</h1>
          <div className="practice-years">
            <p
              className={activeYear === "2022" ? "active-year" : null}
              onClick={(e) => setActiveYear("2022")}
            >
              2022
            </p>
            <p
              className={activeYear === "2021" ? "active-year" : null}
              onClick={(e) => setActiveYear("2021")}
            >
              2021
            </p>
          </div>
        </div>
        <div className="finish-section-slider-container container">
          <div className="finish-section-slider-item">
            <img src={finisher1} alt="" />
            <p className="finishers-title">
              <h2>latitude 35</h2>
              <p className="record-set">World record set</p>
            </p>
            <p className="race-time">30 Days, 5 Hours, 37 Minutes</p>
          </div>
          <div className="finish-section-slider-item">
            <img src={finisher2} alt="" />
            <p className="finishers-title">
              <h2>Ocean Sheroes</h2>
              <p className="record-set">World record set</p>
            </p>
            <p className="race-time">30 Days, 5 Hours, 37 Minutes</p>
          </div>
          <div className="finish-section-slider-item">
            <img src={finisher2} alt="" />
            <p className="finishers-title">
              <h2>Ocean Sheroes</h2>
              <p className="record-set">World record set</p>
            </p>
            <p className="race-time">30 Days, 5 Hours, 37 Minutes</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFinish;
