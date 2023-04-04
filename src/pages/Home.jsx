import React, { useEffect, useState } from "react";
import "../Styles/Home.scss";
import HomePageVideo from "../assets/img/homepagevideo.svg";
import TitleArrow from "../assets/img/arrow.svg";
import SmallTitleArrow from "../assets/img/smallarrow.svg";
import Cpath from "../assets/img/cpath.svg";
import CtaButton from "../components/CtaButton";
import teamsTitleArrow from "../assets/img/teamstitlearrow.svg";
import SliderLeft from "../assets/img/SliderLeft.svg";
import SliderRight from "../assets/img/SliderRight.svg";
import teamsSlider0 from "../assets/img/teamsslider0.svg";
import teamsSlider1 from "../assets/img/teamsslider1.svg";

import RaceSlider from "../components/RaceSlider";
// SWIPER
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper";
import HomeNews from "./sections/HomeNews";
import HomeFinish from "./sections/HomeFinish";
import RegisterNow from "./sections/RegisterNow";
///
const Home = () => {
  const swiper = useSwiper();

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

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
      <div className="">
        <section className="teams-section">
          <div className="wrapper-p">
            <RaceSlider className="home-race-slider" />
            <div className="teams-slider-container">
              <div className="teams-slider-title-container container">
                <h2 className="teams-slider-title">
                  2024 GPR
                  <br /> Teams
                  <span>
                    <img src={teamsTitleArrow} alt="" />
                  </span>
                </h2>
                <div className="slider-controls-container">
                  <p className="see-all-teams">SEE ALL TEAMS</p>
                  <div className="slider-controls">
                    <img src={SliderLeft} alt="" className="prevel" />
                    <img src={SliderRight} alt="" className="nextel" />
                  </div>
                </div>
              </div>
              <div className="teams-slider-body">
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={windowSize < 600 ? 12 : 120}
                  slidesPerView={windowSize < 560 ? 1 : 1.5}
                  navigation={{ nextEl: ".nextel", prevEl: ".prevel" }}
                  // centeredSlides={true}
                >
                  <SwiperSlide>
                    <div className="teams-slider-item">
                      <img src={teamsSlider0} alt="" />
                      <div className="teams-slider-item-text-container">
                        <h2 className="sldier-item-title">
                          Rowing Oceans 4 Women
                        </h2>
                        <div className="slider-item-subtitle-container">
                          <p>Country : USA</p>
                          <p>Entry : Fours</p>
                          <p>IG: @rowingoceans4women</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="teams-slider-item">
                      <img src={teamsSlider1} alt="" />
                      <div className="teams-slider-item-text-container">
                        <h2 className="sldier-item-title">
                          Rowing Oceans 4 Women
                        </h2>
                        <div className="slider-item-subtitle-container">
                          <p>Country : USA</p>
                          <p>Entry : Fours</p>
                          <p>IG: @rowingoceans4women</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="teams-slider-item">
                      <img src={teamsSlider1} alt="" />
                      <div className="teams-slider-item-text-container">
                        <h2 className="sldier-item-title">
                          Rowing Oceans 4 Women
                        </h2>
                        <div className="slider-item-subtitle-container">
                          <p>Country : USA</p>
                          <p>Entry : Fours</p>
                          <p>IG: @rowingoceans4women</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </section>
        <HomeNews />
        <HomeFinish />
        <RegisterNow />
      </div>
    </div>
  );
};

export default Home;
