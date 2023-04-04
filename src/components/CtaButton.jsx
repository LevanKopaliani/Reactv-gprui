import React from "react";
import "../Styles/CtaButton.scss";
import ArrowCircleRight from "../assets/img/arrow-circle-right.svg";

const CtaButton = ({ className, text, name }) => {
  return (
    <div className={"ctabutton " + className}>
      <div className="icon-container">
        {name !== "register" ? (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1_181)">
              <path
                d="M10 20C15.5229 20 20 15.5229 20 10C20 4.47715 15.5229 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5229 4.47715 20 10 20Z"
                fill="#1E41C8"
              />
              <path
                d="M6.03906 10.209H13.5391"
                stroke="white"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.78906 6.45898L13.5391 10.209L9.78906 13.959"
                stroke="white"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_181">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        ) : (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1_320)">
              <path
                d="M10 20C15.5229 20 20 15.5229 20 10C20 4.47715 15.5229 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5229 4.47715 20 10 20Z"
                fill="white"
              />
              <path
                d="M6.03906 10.209H13.5391"
                stroke="#1B1A20"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.78906 6.45898L13.5391 10.209L9.78906 13.959"
                stroke="#1B1A20"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_320">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        )}

        {/* <img src={ArrowCircleRight} alt="arrow" /> */}
      </div>
      <div className="text-container">{text}</div>
    </div>
  );
};

export default CtaButton;
