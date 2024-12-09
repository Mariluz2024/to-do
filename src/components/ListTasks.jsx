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

  const handleCompletar = (tareaId) => {
    const tareasActualizadas = tareas.map((tarea) =>
      tarea.id === tareaId ? { ...tarea, completed: !tarea.completed } : tarea
    );
    setTareas(tareasActualizadas);
    localStorage.setItem("tareas", JSON.stringify(tareasActualizadas));
  };

  return (
    <ul>
      {tareas.map((tarea) => (
        <ListItem
          key={tarea.id}
          task={tarea}
          onDelete={handleDelete}
          onCompletar={handleCompletar}
        />
      ))}
    </ul>
  );
};

export default ListTasks;
