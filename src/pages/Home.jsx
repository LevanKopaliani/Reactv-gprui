import React from "react";
import "../Styles/Home.scss";
import HomePageVideo from "../assets/img/homepagevideo.svg";
import TitleArrow from "../assets/img/arrow.svg";
import SmallTitleArrow from "../assets/img/smallarrow.svg";
import Cpath from "../assets/img/cpath.svg";
import CtaButton from "../components/CtaButton";

const Home = () => {
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
    </div>
  );
};

export default Home;
