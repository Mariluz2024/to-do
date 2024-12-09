import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="bg-light border-end vh-100 p-3">
      <nav>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link text-primary" to="/">
              {" "}
               Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-primary" to="/add-task">
              {" "}
              Add task
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-primary" to="/about">
              {" "}
              About
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
