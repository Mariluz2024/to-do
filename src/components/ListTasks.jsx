import React from "react";

import ListItem from "./ListItem";

import tasksData from "./../data/tasks.json";

const ListTasks = () => {
  return (
    <ul>
      {tasksData.map((task, i) => (
        <ListItem key={i} task={task} />
      ))}
    </ul>
  );
};

export default ListTasks;
