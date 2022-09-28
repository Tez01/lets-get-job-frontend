import "../styles/Home.css";
import Card from "./Card.js";
const Home = () => {
  return (
    <div className="Home">
      <div className="Home-Container--1">
        <h1 className="primary_text_color primary_font">Choose a tool</h1>
      </div>
      <div className="Home-Container--2">
        <Card buttonName="Application Tracker" />
      </div>
      <div className="Home-Container--3"></div>
    </div>
  );
};

export default Home;
