import React from "react";

const ListItem = ({ task: tarea, onDelete, onCompletar }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span>
        {tarea.task}{" "}
        {tarea.completed ? (
          <span className="text-success">✔️</span>
        ) : (
          <span className="text-danger">❌</span>
        )}
      </span>
      <button className="btn btn-success btn-sm" onClick={() => onCompletar(tarea.id)}>
        Completar
      </button>
      <button className="btn btn-danger btn-sm" onClick={() => onDelete(tarea.id)}>
        Eliminar
      </button>
    </li>
  );
};

export default ListItem;
