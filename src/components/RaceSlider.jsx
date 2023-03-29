import React, { useState } from "react";
import "../Styles/RaceSlider.scss";
import RaceSliderData from "../data/RaceSliderData.jsx";
import SliderArrowLeft from "../assets/img/sliderarrleft.svg";
import SliderArrowRight from "../assets/img/sliderarrright.svg";

const RaceSlider = ({ className }) => {
  const [slider, setSlider] = useState(0);

  const changeSlider = () => {
    setSlider((prev) => prev + 1);
  };

  return (
    <div className={`race-slider ${className}`}>
      <div className="race-slider-img">
        {/* <img src={`/src/assets/img/Slider${slider}.svg`} alt="" /> */}
        <img src={RaceSliderData[slider].img} alt="" />
        <p className="race-slider-img-number">{`${slider + 1}/4`}</p>
      </div>
      <div className="race-slider-text">
        <h2 className="race-slider-title">{RaceSliderData[slider].title}</h2>
        <p className="race-slider-subtitle">{RaceSliderData[slider].text}</p>
        <p className="race-slider-readmore">Read More</p>
        <div className="race-slider-controls">
          <img
            src={SliderArrowLeft}
            alt="left"
            onClick={() => setSlider((prev) => (prev === 0 ? 3 : prev - 1))}
          />
          <img
            src={SliderArrowRight}
            alt="right"
            onClick={() => setSlider((prev) => (prev === 3 ? 0 : prev + 1))}
          />
        </div>
      </div>
    </div>
  );
};

export default RaceSlider;
