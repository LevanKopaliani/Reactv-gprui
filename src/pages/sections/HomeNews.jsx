import React from "react";
import "../../Styles/HomeNews.scss";
import newsImg from "../../assets/img/newsvideo.svg";
import newsReadmoreArrow from "../../assets/img/newsreadmorearrow.svg";
import ArrowLeft from "../../assets/img/sliderarrleft.svg";
import ArrowRight from "../../assets/img/sliderarrright.svg";
import PressSlider from "../../components/PressSlider";

const HomeNews = () => {
  return (
    <section className="news-section">
      <div className="container">
        <h1 className="news-title">
          Check out
          <br />
          the recent news
        </h1>
        <div className="news-body">
          <div className="news-img-container">
            <img src={newsImg} alt="news" />
            <div className="news-img-title">
              <p>Amet fringilla sodales sem nulla risus risus quis. Duis </p>
              <span>21.05.2022</span>
            </div>
          </div>
          <div className="news-info-container">
            <div className="news-item">
              <time className="news-item-date">21.05.2022</time>
              <h2 className="news-item-title">
                Amet fringilla sodales sem nulla risus risus quis. Duis commodo.
              </h2>
              <p className="news-item-readmore">
                Read More
                <span>
                  <img src={newsReadmoreArrow} alt="" />
                </span>
              </p>
            </div>
            <div className="news-item">
              <time className="news-item-date">21.05.2022</time>
              <h2 className="news-item-title">
                Amet fringilla sodales sem nulla risus risus quis. Duis commodo.
              </h2>
              <p className="news-item-readmore">
                Read More
                <span>
                  <img src={newsReadmoreArrow} alt="" />
                </span>
              </p>
            </div>
            <div className="news-arrows-container">
              <div className="news-arrow">
                <img src={ArrowLeft} alt="left" />
              </div>
              <div className="news-arrow">
                <img src={ArrowRight} alt="right" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <PressSlider className={"press-slider"} />
    </section>
  );
};

export default HomeNews;
