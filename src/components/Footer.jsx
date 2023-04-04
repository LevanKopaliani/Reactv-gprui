import React from "react";
import "../Styles/Footer.scss";
import FooterLogo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";
import facebook from "../assets/img/facebook.svg";
import instagram from "../assets/img/Instagram.svg";
import linkedin from "../assets/img/linkedin.svg";
import tweeter from "../assets/img/tweeter.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper-p">
        <div className="footer-container">
          <div className="footer-logo-container">
            <img src={FooterLogo} alt="Logo" />
          </div>
          <div className="footer-links-container">
            <div className="footer-links">
              <ul className="footer-nav-links">
                <li>
                  <Link to="/">About</Link>
                </li>
                <li>
                  <Link to="/">Teams</Link>
                </li>
                <li>
                  <Link to="/">Partners</Link>
                </li>
                <li>
                  <Link to="/">News</Link>
                </li>
              </ul>
              <ul className="footer-contact-links">
                <li>
                  <Link to="/">Contact</Link>
                </li>
                <li>
                  <Link to="/">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="/">Privacy Policy</Link>
                </li>
              </ul>
              <div className="social-links">
                <Link>
                  <img src={facebook} alt="facebook" />
                </Link>
                <Link>
                  <img src={instagram} alt="facebook" />
                </Link>
                <Link>
                  <img src={linkedin} alt="facebook" />
                </Link>
                <Link>
                  <img src={tweeter} alt="facebook" />
                </Link>
              </div>
            </div>
            <div className="credentials">
              2023 Great Pacific Race LLC. All Rights Reserved | Site by: REAKT
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
