import React from "react";
import "/app/src/styles/Tracker/Tracker.css";
import Forms from "./Forms";

const Tracker = () => {
  return (
    <div className="Tracker">
      <div className="Tracker_Navbar">
        <div className="Tracker_Navbar--Item1">Application Tracker</div>
        <div className="Tracker_Navbar--Item2">Navigation</div>
      </div>
      <div className="Tracker_WorkingArea">
        <div className="Tracker_WorkingArea--Item1">History</div>
        <div className="Tracker_WorkingArea--Item2">
          {/* <Utilites /> */}
          {/* <div className="Tracker_WorkingArea--Item2--Utilities">Utilities</div> */}
          <Forms />

          <div className="Tracker_WorkingArea--Item2--Fields">Fields</div>
          <div className="Tracker_WorkingArea--Item2--Table">Table</div>
        </div>
      </div>
      <div className="Tracker_Footer">Footer</div>
    </div>
  );
};

export default Tracker;
