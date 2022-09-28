import "../styles/Card.css";
const Card = ({ buttonName }) => {
  return (
    <div>
      <button
        className="button_like_card primary_background"
        style={{ "--h": "100px" }}
      >
        {buttonName}
      </button>
    </div>
  );
};

export default Card;
