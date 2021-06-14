import { useSelector } from "react-redux";
import table from "./table";
import React from "react";
function ListTasks() {
  const tasks = useSelector((state) => state);

  return (
    <div className="table-responsive">
      <table className="table table-primary border-primary">
        <thead>
          <tr>
            <th>Title</th>
            <th>Details</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>{tasks && table(tasks)}</tbody>
      </table>
    </div>
  );
}

export default ListTasks;
