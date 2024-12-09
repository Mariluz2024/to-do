import React from "react";
import { useEffect, useState } from "react";

import ListItem from "./ListItem";

import tareasIniciales from "../data/tasks.json"

const ListTasks = () => {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    let tareasAlmacenadas = JSON.parse(localStorage.getItem("tareas")) || [];

    if (!tareasAlmacenadas.length) {
      tareasAlmacenadas = tareasIniciales;
      localStorage.setItem("tareas", JSON.stringify(tareasAlmacenadas));
    }

    setTareas(tareasAlmacenadas);
  }, []);

  const handleDelete = (tareaId) => {
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== tareaId);
    localStorage.setItem("tareas", JSON.stringify(tareasActualizadas));
    setTareas(tareasActualizadas);
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
