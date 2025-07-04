import * as React from "react";

interface LOGO_INTERFACE {
    clicked:boolean
}

const SvgIcon = (props:LOGO_INTERFACE) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="auto"
    viewBox="0 0 96 87"
  >
    <path
    className={`transition-all duration-300 ${!props.clicked ? 'delay-500' : ''}`}
      fill={`${props.clicked ? "#fff" : "#000"}`}
      d="M0 68.5 17 30 3.5 15.5 49 0 11.5 87 0 75.5zM58.5 23.5 44 17l6-16 45.5 19-45 37.5-16-12zM31.5 48l-4 19 23 19L81 85z"
    ></path>
  </svg>
);

export default SvgIcon;
