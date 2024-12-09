import "./App.css";

import NavBar from "./components/NavBar"
import Sidebar from './components/Sidebar'
import ListTasks from './components/ListTasks'
import Footer from './components/Footer'

function App() {
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
}

export default App;
