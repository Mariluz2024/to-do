import React from "react";

const Sidebar = () => {
  return (
    <aside className="bg-light border-end vh-100 p-3">
      <nav>
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link text-primary" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-primary" href="/about">
              About
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
