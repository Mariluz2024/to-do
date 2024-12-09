import React from "react";

const ListItem = ({ task, onDelete }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span>
        {task.task}{" "}
        {task.completed ? (
          <span className="text-success">✔️</span>
        ) : (
          <span className="text-danger">❌</span>
        )}
      </span>
      <button className="btn btn-danger btn-sm" onClick={() => onDelete(task.id)}>
        Eliminar
      </button>
    </li>
  );
};

export default ListItem;
