import React from "react";
import "../Styles/PressSlider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Vogue from "../assets/img/vogue.svg";

const PressSlider = ({ className }) => {
  return (
    <div className={`press-slider-container ${className}`}>
      <h1 className="press-slider-title">In the press</h1>

      <div className="press-swiper-container">
        <Swiper spaceBetween={20} draggable={true} slidesPerView={"auto"}>
          <SwiperSlide>
            <div className="news-slider-item">
              <div className="slider-img-container">
                <img src={Vogue} alt="vogue" />
              </div>

              <p className="slider-item-info">
                “These female rowers crossing The Pacific are my favorite people
                on the internet”
              </p>
              <p className="slider-item-brand">Vogue</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="news-slider-item">
              <div className="slider-img-container">
                <img src={Vogue} alt="vogue" />
              </div>

              <p className="slider-item-info">
                “These female rowers crossing The Pacific are my favorite people
                on the internet”
              </p>
              <p className="slider-item-brand">Vogue</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="news-slider-item">
              <div className="slider-img-container">
                <img src={Vogue} alt="vogue" />
              </div>

              <p className="slider-item-info">
                “These female rowers crossing The Pacific are my favorite people
                on the internet”
              </p>
              <p className="slider-item-brand">Vogue</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="news-slider-item">
              <div className="slider-img-container">
                <img src={Vogue} alt="vogue" />
              </div>

              <p className="slider-item-info">
                “These female rowers crossing The Pacific are my favorite people
                on the internet”
              </p>
              <p className="slider-item-brand">Vogue</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default PressSlider;
