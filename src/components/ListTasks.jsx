import React from "react";

import ListItem from "./ListItem";

const ListTasks = () => {
  let tareas = localStorage.getItem("tareas");
  
  if (!tareas) {
    tareas = [];
  } else {
    tareas = JSON.parse(tareas);
  }

  return (
    <ul>
      {tareas.map((task, i) => (
        <ListItem key={i} task={task} />
      ))}
    </ul>
  );
};

export default ListTasks;
