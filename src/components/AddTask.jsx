import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
  const [taskTitle, setTaskTitle] = useState(""); // Estado para el título de la tarea
  const navigate = useNavigate(); // Hook para navegar

  // Maneja el cambio en el campo de entrada
  const handleInputChange = (e) => {
    setTaskTitle(e.target.value);
  };

  // Maneja la lógica para agregar la tarea al presionar "Enter"
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && taskTitle.trim() !== "") {
      // Aquí puedes agregar la tarea a tu lista (podrías llamarlo a un backend o actualizar el estado global)
      console.log(`Tarea agregada: ${taskTitle}`); // Simulación de agregar la tarea
      setTaskTitle(""); // Limpia el campo de entrada

      // Navega al Dashboard
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
