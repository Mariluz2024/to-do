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
    const tareaIndice = tareas.findIndex((tarea) => tarea.id !== tareaId);
    tareas[tareaIndice].completed = !tareas[tareaIndice].completed;
    setTareas(tareas);
  }

  return (
    <ul>
      {tareas.map((tarea) => (
        <ListItem key={tarea.id} task={tarea} onDelete={handleDelete} onCompletar={handleCompletar} />
      ))}
    </ul>
  );
};

export default ListTasks;
