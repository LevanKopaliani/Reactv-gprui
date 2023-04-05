import React from "react";
import "../Styles/Contact.scss";
import dropArrow from "../assets/img/droparrow.svg";
import Email from "../assets/img/mail.svg";
import CtaButton from "../components/CtaButton";
import RegisterNow from "./sections/RegisterNow";

const Contact = () => {
  return (
    <div className="contactpage">
      <div className="wrapper-p">
        <div className="contact-heading-section container">
          <h1 className="contact-title title">CONTACT</h1>
          <p className="contact-subtitle">LET US KNOW HOW WE CAN HELP</p>
        </div>
      </div>
      <div className="contact-form-section">
        <div className="wrapper-p">
          <div className="contact-form-container">
            <div className="contact-form-heading">
              <p>CONTACT REGARDING YOUR TEAM</p>
              <span>
                <img src={dropArrow} alt="" />
              </span>
            </div>
            <form action="" className="contact-form">
              <div className="input-group">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
              </div>
              <span>
                <img src={Email} alt="" />
                <input type="email" placeholder="Email address" />
              </span>

              <input type="text" placeholder="Subject/Topic" />
              <textarea
                name="openfield"
                id=""
                cols="30"
                rows="10"
                placeholder="Open field"
              ></textarea>
              <CtaButton
                className={"submit-button"}
                text={"submit"}
                name={"register"}
              />
            </form>
          </div>
        </div>
      </div>
      <RegisterNow />
    </div>
  );
};

export default Contact;
