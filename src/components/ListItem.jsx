import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ task: tarea, onDelete, onCompletar }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span>
        {tarea.completed ? (
          <span className="text-success">✔️</span>
        ) : (
          <span className="text-danger">❌</span>
        )}{" "}
        <Link to={`/item/${tarea.id}`} className="text-decoration-none">
          {tarea.task}
        </Link>
      </span>
      <div className="btn-group" role="group" aria-label="Basic example">
        <button
          className={`btn btn-sm ${
            tarea.completed ? "btn-success" : "btn-warning"
          }`}
          onClick={() => onCompletar(tarea.id)}
        >
          {tarea.completed ? "Completada" : "Completar"}
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => onDelete(tarea.id)}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default ListItem;
