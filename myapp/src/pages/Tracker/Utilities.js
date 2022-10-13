import React from "react";
import Button from "./Button";
import "../../styles/Tracker/Utilities.css";
const Utilities = ({ buttonName, addButtonClicked }) => {
  return (
    <div className="Utilities">
      <Button buttonName="Add" buttonClickHandler={addButtonClicked} />
      <Button buttonName={buttonName} />
    </div>
  );
};

export default Utilities;
