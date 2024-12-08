import React from "react";

const ListItem = ({ task }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span>
        {task.task}{" "}
        {task.isCompleted ? (
          <span className="text-success">✔️</span>
        ) : (
          <span className="text-danger">❌</span>
        )}
      </span>
      <button className="btn btn-danger btn-sm">
        Eliminar
      </button>
    </li>
  );
};

export default ListItem;
