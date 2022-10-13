import React, { useState } from "react";
import "/app/src/styles/Tracker/Tracker.css";
import JobContainer from "./JobContainer";
import Utilities from "./Utilities";
const Tracker = () => {
  const [rows, changeRows] = useState(1);

  const addButtonClicked = () => {
    changeRows(rows + 1);
  };
  return (
    <div className="Tracker">
      <div className="Tracker_Navbar--Item1 Cool_Border">
        Application Tracker
      </div>
      <div className="Tracker_Navbar--Item2 Cool_Border">Navigation</div>

      <div className="Tracker_WorkingArea--Item1 Cool_Border ">History</div>
      <div className="Tracker_WorkingArea--Item2 Cool_Border">
        <Utilities buttonName="Save" addButtonClicked={addButtonClicked} />

        {/* <Utilites /> ********* Do later, Add new column button here and relatedd functionality*/}
        {/* <div className="Tracker_WorkingArea--Item2--Utilities">Utilities</div> */}
        <JobContainer id="JobContainer" rowCount={rows} />
      </div>
      <div className="Tracker_Footer">Footer</div>
    </div>
  );
};

export default Tracker;
