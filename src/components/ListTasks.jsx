import React from "react";
import { useEffect, useState } from "react";

import ListItem from "./ListItem";

const ListTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <ul>
      {tareas.map((task, i) => (
        <ListItem key={i} task={task} onDelete={handleDelete} />
      ))}
    </ul>
  );
};

export default ListTasks;
