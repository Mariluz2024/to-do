import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import "./App.css";

import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import ListItemDetails from "./components/ListItemDetails";
import About from "./components/About";
import AddTask from "./components/AddTask";
import NotFound from "./components/NotFound";


function App() {
  return (
    <div className="d-flex flex-column vh-100">
      <NavBar />
      <div className="d-flex flex-grow-1">
        <Sidebar />
        <div className="flex-grow-1" style={{margin: '2em'}}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/item/:id" element={<ListItemDetails />} />
            <Route path="/add-task" element={<AddTask />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
