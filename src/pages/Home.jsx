import React, { useState } from "react";
import "../Styles/Home.scss";
import HomePageVideo from "../assets/img/homepagevideo.svg";
import TitleArrow from "../assets/img/arrow.svg";
import SmallTitleArrow from "../assets/img/smallarrow.svg";
import Cpath from "../assets/img/cpath.svg";
import CtaButton from "../components/CtaButton";
import Slider1 from "../assets/img/slider1.svg";
import Slider2 from "../assets/img/slider2.svg";
import Slider3 from "../assets/img/slider3.svg";
import Slider4 from "../assets/img/slider4.svg";
import SliderArrowLeft from "../assets/img/sliderarrleft.svg";
import SliderArrowRight from "../assets/img/sliderarrright.svg";

const Home = () => {
  const [slider, setSlider] = useState(1);

  const changeSlider = () => {
    setSlider((prev) => prev + 1);
  };

  return (
    <div className="homepage">
      <section className="title-section">
        <div className="wrapper-p">
          <div className="homepagetext-container">
            <img className="cpath" src={Cpath} alt="" />
            <h1 className="homepage-title title">
              SAN FRANCISCO
              <br />
              <p>
                <img
                  src={window.innerWidth < 768 ? SmallTitleArrow : TitleArrow}
                  alt=""
                />
                TO HAWAII
              </p>
              <p className="title">MAY 2024</p>
            </h1>
            <p className="homepage-subtitle">2400 NM OF OCEAN ROWING</p>
          </div>
          <div className="homepagevideo-container">
            <img src={HomePageVideo} alt="video" />
            <CtaButton className="homepagevideobutton" text="Register Now" />
            <p className="homepagevideo-backgroundtext">2024</p>
          </div>

          <div className="homepage-bottom-text container">
            <p>A RACE UNLIKE ANY YOU'VE EXPERIENCED BEFORE...</p>
          </div>
        </div>
      </section>
      <section className="teams-section">
        <div className="race-slider">
          <div className="race-slider-img">
            <img src={`/src/assets/img/Slider${slider}.svg`} alt="" />
            <p className="race-slider-img-number">{`${slider}/4`}</p>
          </div>
          <div className="race-slider-text">
            <h2 className="race-slider-title">The race</h2>
            <p className="race-slider-subtitle">
              With a distance of 2400 nautical miles, the Great Pacific Race is
              one of the toughest races on Earth. Teams made up of 3 or 4 crew,
              all competing in identical boats, will be entirely self supported
              and unassisted from the start gun in San Francisco until the
              finishing line in Hawaii.
            </p>
            <p className="race-slider-readmore">Read More</p>
            <div className="race-slider-controls">
              <img
                src={SliderArrowLeft}
                alt="left"
                onClick={() => setSlider((prev) => (prev === 1 ? 4 : prev - 1))}
              />
              <img
                src={SliderArrowRight}
                alt="right"
                onClick={() => setSlider((prev) => (prev === 4 ? 1 : prev + 1))}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
