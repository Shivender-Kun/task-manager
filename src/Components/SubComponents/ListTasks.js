import { useSelector } from "react-redux";
import table from "./table";
import React from "react";
function ListTasks() {
  const tasks = useSelector((state) => state);

  return (
    <div className="table-responsive">
      <table className="table table-primary border-primary">
        <thead>
          {tasks.length > 0 ? (
            <tr>
              <th>Title</th>
              <th>Details</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          ) : (
            <h3 className="text-center text-danger">No Todos</h3>
          )}
        </thead>
        <tbody>{tasks && table(tasks)}</tbody>
      </table>
    </div>
  );
}

export default ListTasks;
