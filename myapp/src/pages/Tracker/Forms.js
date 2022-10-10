import React from "react";
import "../../styles/Tracker/Forms.css";
const Fields = () => {
  return (
    // <form className="JobForm">
    //   <input type="number" />
    //   <input type="text" placeholder="Job Title" />
    //   <input type="text" placeholder="Job Url" />
    // </form>
    <div id="JobTable">
      <table>
        <tr>
          <th>Job Title</th>
          <th>Job Url</th>
          <th>Application Date</th>
        </tr>
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
        </tr>
      </table>
    </div>
  );
};

export default Fields;
