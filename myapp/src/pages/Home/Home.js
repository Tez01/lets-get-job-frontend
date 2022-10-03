import "../../styles/Home/Home.css";
import React from "react";
import Card from "./Card.js";
const Home = () => {
  return (
    <div className="Home primary_color">
      <div className="Home-Container--1 primary_text_color primary_font title">
        Choose a Tool
      </div>
      <div className="Home-Container--2">
        <Card
          buttonName="PORTFOLIO MAKER"
          buttonHeight="20%"
          buttonWidth="20%"
          imageSource="asd.svg"
        />
        <Card
          buttonName="APPLICATION TRACKER"
          buttonHeight="20%"
          buttonWidth="20%"
        />

        <Card
          buttonName="SCHEDULE MAKER"
          buttonHeight="20%"
          buttonWidth="20%"
        />
      </div>
      <div className="Home-Container--3 tertiary_color">
        <a href="https://www.google.com">Contact</a>
        <a>About</a>

        <a href="https://www.linkedin.com/in/tejpartap/">LinkedIn</a>
      </div>
    </div>
  );
};

export default Home;
