import React from "react";
import { AddTask, ListTasks } from "./Components";

function Home() {
  return (
    <div className="Home">
      <div id="add">
        <h2 className="text-center text-light">Add Task</h2>
        <AddTask />
      </div>
      <div id="list">
        <h2 className="text-light text-center">Tasks</h2>
        <ListTasks />
      </div>
      ;
    </div>
  );
}

export default Home;
