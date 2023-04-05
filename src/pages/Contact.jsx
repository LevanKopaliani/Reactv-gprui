import React from "react";
import "../Styles/Contact.scss";
import dropArrow from "../assets/img/droparrow.svg";

const Contact = () => {
  return (
    <div className="contactpage">
      <div className="wrapper-p">
        <div className="contact-heading-section">
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
              <input type="email" placeholder="Email address" />
              <input type="text" placeholder="Subject/Topic" />
              <textarea
                name="openfield"
                id=""
                cols="30"
                rows="10"
                placeholder="Open field"
              ></textarea>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
