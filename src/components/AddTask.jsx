import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setTaskTitle(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && taskTitle.trim() !== "") {
      let tareas = localStorage.getItem("tareas");

      if (!tareas) {
        tareas = [];
      } else {
        tareas = JSON.parse(tareas);
      }

      tareas.push({
        task: taskTitle,
        completed: false,
      });

      localStorage.setItem("tareas", JSON.stringify(tareas));

      setTaskTitle("");

      navigate("/");
    }
  };

  return (
    <div className="add-task-container">
      <h2>Agregar Tarea</h2>
      <input
        type="text"
        placeholder="Escribe el título de la tarea y presiona Enter"
        value={taskTitle}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        className="form-control"
      />
    </div>
  );
};

export default AddTask;
