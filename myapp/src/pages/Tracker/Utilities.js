import React from "react";
import Button from "./Button";
import "../../styles/Tracker/Utilities.css";
import Utils from "../../utils/utils.js";
import Common from "../../utils/CommonNames.js";
const Utilities = ({ buttonName, addButtonClicked }) => {
  const saveButtonClick = () => {
    // Get the contents of all rows and make an object.
    const util = new Utils();
    const commonNames = new Common();
    let tableData = {};
    try {
      let headRow = document
        .querySelectorAll(
          // HeadRow is a HTML collection of all th values in head
          `#${commonNames.jobTableId} > thead > tr` // It is assumed that there is only one head row
          // otherwise error will be thrown
        )[0]
        .getElementsByTagName("th"); // Get the head value of first such row
      headRow = [...headRow]; // Convert to an array
      let dataRows = document.querySelectorAll(
        // Gets the NodeList of all row elements
        `#${commonNames.jobTableId} > tbody > tr`
      );
      dataRows = [...dataRows]; // Convert to an array

      for (let [i, row] of dataRows.entries()) {
        let rowData = [...row.getElementsByTagName("input")]; // Get input field for this row
        tableData[`${i}`] = {}; // Add an empty object at this row in tableData
        for (let [j, field] of headRow.entries()) {
          tableData[`${i}`] = {
            ...tableData[`${i}`], // In addition to whatever is already there
            [field.innerHTML]: rowData[j].value, // Add new field for this row
          }; // Set each field as empty array for now
        }
      }
    } catch (err) {
      console.log(err);
      return;
    }

    // const allRows = document.querySelector
    // const dataValues = util.getDataFromRow(
    //   `#${commonNames.jobTableId} > tbody > tr`
    // );

    // Post the object to backend for saving in database.
  };

  return (
    <div className="Utilities">
      <Button buttonName="Add" buttonClickHandler={addButtonClicked} />
      <Button buttonName={buttonName} buttonClickHandler={saveButtonClick} />
    </div>
  );
};

export default Utilities;
