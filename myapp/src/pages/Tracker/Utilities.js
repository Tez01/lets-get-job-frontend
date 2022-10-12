import React from "react";
import Button from "./Button";
import "../../styles/Tracker/Utilities.css";
const Utilities = ({ buttonName }) => {
  return (
    <div className="Utilities">
      <Button buttonName="Add" />
      <Button buttonName={buttonName} />
    </div>
  );
};

export default Utilities;
