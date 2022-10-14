import React, { useEffect, useState } from "react";
import "../../styles/Tracker/JobContainer.css";
import Common from "../../utils/CommonNames";

const TRow = () => {
  // for (let )
  // for (let i = 0; i < )
  return (
    <tr>
      <td>
        <input type="text" />
      </td>
      <td>
        <input type="text" />
      </td>
      <td>
        <input type="text" />
      </td>
      <td>
        <input type="text" />
      </td>
      <td>
        <input type="text" />
      </td>
    </tr>
  );
};

const JobsContainer = ({ rowCount, id }) => {
  const commonNames = new Common();

  const [rows, addRows] = useState();
  useEffect(() => {
    let newRows = [];
    for (let i = 0; i < rowCount; i++) {
      newRows.push(<TRow key={i} />);
    }
    addRows(newRows);
  }, [rowCount]);
  return (
    // <form className="JobForm">
    //   <input type="number" />
    //   <input type="text" placeholder="Job Title" />
    //   <input type="text" placeholder="Job Url" />
    // </form>

    <div id={`${commonNames.jobTableContainerId}`}>
      <table id={`${commonNames.jobTableId}`}>
        <thead>
          <tr>
            <th>Job Title</th>
            <th>Job Url</th>
            <th>Application Date</th>
            <th>Follow-up</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default JobsContainer;
