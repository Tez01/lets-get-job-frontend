import "../../styles/Home/Card.css";
import React from "react";
const Card = ({ buttonName, buttonHeight, buttonWidth, imageSource }) => {
  return (
    <>
      <button
        className="button_like_card secondary_color primary_text_color primary_font"
        style={{ "--h": buttonHeight, "--w": buttonWidth }}
      >
        {buttonName}
      </button>
    </>
  );
};

export default Card;
