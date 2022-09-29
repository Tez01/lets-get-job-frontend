import "../styles/Card.css";
const Card = ({ buttonName, buttonHeight, buttonWidth }) => {
  return (
    <>
      <button
        className="button_like_card primary_background"
        style={{ "--h": buttonHeight, "--w": buttonWidth }}
      >
        {buttonName}
      </button>
    </>
  );
};

export default Card;
