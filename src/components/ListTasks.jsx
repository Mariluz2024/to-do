import React from "react";
import { useEffect, useState } from "react";

import ListItem from "./ListItem";

const ListTasks = () => {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    const tareasAlmacenadas = JSON.parse(localStorage.getItem("tareas")) || [];
    setTareas(tareasAlmacenadas);
  }, []);

  const handleDelete = (tareaId) => {
    const updatedTasks = tareas.filter((tarea) => tarea.id !== tareaId);
    setTareas(updatedTasks);
  };

  return (
    <ul>
      {tareas.map((tarea) => (
        <ListItem key={tarea.id} task={tarea} onDelete={handleDelete} />
      ))}
    </ul>
  );
};

export default ListTasks;
