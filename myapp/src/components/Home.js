import "../styles/Home.css";
import Card from "./Card.js";
const Home = () => {
  return (
    <div className="Home">
      <div className="Home-Container--1 primary_text_color primary_font title">
        Choose a tool
      </div>
      <div className="Home-Container--2">
        <Card
          buttonName="Portfolio Maker"
          buttonHeight="20%"
          buttonWidth="20%"
        />
        <Card
          buttonName="Application Tracker"
          buttonHeight="20%"
          buttonWidth="20%"
        />

        <Card
          buttonName="Schedule Maker"
          buttonHeight="20%"
          buttonWidth="20%"
        />
      </div>
      <div className="Home-Container--3"></div>
    </div>
  );
};

export default Home;
