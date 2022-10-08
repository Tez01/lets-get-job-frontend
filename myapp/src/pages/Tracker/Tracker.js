import React from "react";
import "/app/src/styles/Tracker/Tracker.css";
const Tracker = () => {
  return (
    <div className="Tracker">
      <div className="Tracker_Navbar">
        <div className="Tracker_Navbar--Item1">Application Tracker</div>
        <div className="Tracker_Navbar--Item2">Navigation</div>
      </div>
      <div className="Tracker_WorkingArea">Working Area</div>
      <div className="Tracker_Footer">Footer</div>
    </div>
  );
};

export default Tracker;
