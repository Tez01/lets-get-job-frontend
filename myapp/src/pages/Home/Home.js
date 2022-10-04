import "../../styles/Home/Home.css";
import React from "react";
import Card from "./Card.js";
import { Link } from "react-router-dom";

const Home = () => {
  const TrackerClicked = () => {
    console.log("Tracker button clicked");
  };

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
          clickHandler={TrackerClicked}
        />

        <Card
          buttonName="SCHEDULE MAKER"
          buttonHeight="20%"
          buttonWidth="20%"
        />
      </div>
      <div className="Home-Container--3 tertiary_color">
        <Link to="Home">Contact</Link>
        <a>About</a>

        <Link to="Home">LinkedIn</Link>
      </div>
    </div>
  );
};

export default Home;
