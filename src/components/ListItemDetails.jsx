import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ListItemDetails = () => {
  const { id } = useParams();
  const [tarea, setTarea] = useState(null);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tareas")) || [];
    const tareaEncontrada = storedTasks.find((task) => task.id === id);
    setTarea(tareaEncontrada);
  }, [id]);

  if (!tarea) {
    return (
      <div className="container mt-4">
        <p className="text-danger">No se encontró la tarea con ID: {id}</p>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header">
          <h5>Detalles de la Tarea</h5>
        </div>
        <div className="card-body">
          <h6 className="card-title">
            <strong>Tarea:</strong> {tarea.task}
          </h6>
          <p className="card-text">
            <strong>Estado:</strong>{" "}
            {tarea.completed ? (
              <span className="text-success">Completada ✔️</span>
            ) : (
              <span className="text-danger">Pendiente ❌</span>
            )}
          </p>
          <p className="card-text">
            <strong>Fecha:</strong> {new Date(tarea.fecha).toLocaleDateString()}
          </p>
          <button
            className="btn btn-primary"
            onClick={() => window.history.back()}
          >
            Volver
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListItemDetails;
