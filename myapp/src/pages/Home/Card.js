import "../../styles/Home/Card.css";
import React from "react";
import { useLinkClickHandler } from "react-router-dom";
const Card = ({
  buttonName,
  buttonHeight,
  buttonWidth,
  imageSource,
  clickHandler,
}) => {
  return (
    <>
      <button
        id={buttonName}
        className="button_like_card secondary_color primary_text_color primary_font"
        style={{ "--h": buttonHeight, "--w": buttonWidth }}
        onClick={clickHandler}
      >
        {buttonName}
      </button>
    </>
  );
};

export default Card;
