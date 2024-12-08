import React from "react";

import NavBar from "./NavBar";
import Sidebar from "./Sidebar";
import Footer from './Footer'

import ListTasks from "./ListTasks";

const Home = () => {
  return (
    <div className="d-flex flex-column vh-100">
      <NavBar />
      <div className="d-flex flex-grow-1">
        <Sidebar />
        <div className="flex-grow-1">
          <ListTasks />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
