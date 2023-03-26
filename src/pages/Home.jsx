import React from "react";
import "../Styles/Home.scss";
import HomePageVideo from "../assets/img/homepagevideo.svg";
import TitleArrow from "../assets/img/arrow.svg";
import CtaButton from "../components/CtaButton";

const Home = () => {
  return (
    <div className="homepage">
      <div className="wrapper-p">
        <div className="homepagevideo-container">
          <img src={HomePageVideo} alt="video" />
          <CtaButton className="homepagevideobutton" text="Register Now" />
        </div>
        <div className="wrapper">
          <div className="container">
            <div className="homepagetext-container">
              <h1 className="homepage-title">
                SAN FRANCISCO
                <br />
                <p>
                  <img src={TitleArrow} alt="" />
                  TO HAWAII
                </p>
                <br />
                MAY 2024
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
