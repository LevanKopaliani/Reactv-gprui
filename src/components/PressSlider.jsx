import React, { useEffect, useState } from "react";
import "../Styles/PressSlider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Vogue from "../assets/img/vogue.svg";
import Wsj from "../assets/img/wsj.svg";
import Richroll from "../assets/img/richroll.svg";
import La from "../assets/img/la.svg";

const PressSlider = ({ className }) => {
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
    <div className="container">
      <div className={`press-slider-container ${className}`}>
        <h1 className="press-slider-title">In the press</h1>

        <div className="press-swiper-container">
          <Swiper
            spaceBetween={20}
            draggable={true}
            slidesPerView={
              windowSize <= 1510
                ? windowSize <= 1000
                  ? windowSize <= 680
                    ? 1
                    : 2
                  : 3
                : 4
            }
          >
            <SwiperSlide>
              <div className="news-slider-item">
                <div className="slider-img-container">
                  <img src={Vogue} alt="vogue" />
                </div>

                <p className="slider-item-info">
                  “These female rowers crossing The Pacific are my favorite
                  people on the internet”
                </p>
                <p className="slider-item-brand">Vogue</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="news-slider-item">
                <div className="slider-img-container">
                  <img src={Richroll} alt="rich & roll" />
                </div>

                <p className="slider-item-info">
                  “Rowing oceans, high-performance team building, experiential
                  leadership & chasing the impossible.”
                </p>
                <p className="slider-item-brand">rich & roll</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="news-slider-item">
                <div className="slider-img-container">
                  <img src={La} alt="la" />
                </div>

                <p className="slider-item-info">
                  “How four women set a world record rowing across The Pacific
                  ocean.”
                </p>
                <p className="slider-item-brand">los angeles times</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="news-slider-item">
                <div className="slider-img-container">
                  <img src={Wsj} alt="wall street journal" />
                </div>

                <p className="slider-item-info">
                  “Conquering The Pacific sailing against the wind.”
                </p>
                <p className="slider-item-brand">wall street journal</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default PressSlider;
