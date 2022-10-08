import React from "react";
import "../../styles/Tracker/Forms.css";
const Fields = () => {
  return (
    <form className="JobForm">
      <input type="number" />
      <input type="text" placeholder="Job Title" />
      <input type="text" placeholder="Job Url" />
      <input type="text" placeholder="Date Applied" />
    </form>
  );
};

export default Fields;
