import React from "react";
import "../../styles/Tracker/Button.css";
const Button = ({ buttonName, buttonClickHandler }) => {
  return <button onClick={buttonClickHandler}>{buttonName}</button>;
};

export default Button;
