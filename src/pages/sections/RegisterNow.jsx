import React from "react";
import "../../Styles/RegisterNow.scss";
import RegisterNowImg from "../../assets/img/registernowimg.svg";
import CtaButton from "../../components/CtaButton";

const RegisterNow = () => {
  return (
    <section className="reisternow">
      <div className="wrapper-p">
        <div className="reisternow-container">
          <img src={RegisterNowImg} alt="" />
          <div className="registernow-info-container">
            <p>
              “The sea is everything. It covers seven tenths of the terrestrial
              globe. Its breath is pure and healthy. It is an immense desert,
              where man is never lonely, for he feels life stirring on all
              sides.”
            </p>
            <CtaButton
              className={"register-button"}
              text={"Register Now"}
              name={"register"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterNow;
