import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Navbar from "./components/Navbar"; 
import Home from "./pages/Home"; 
import About from "./pages/About";
import Project from "./pages/Project";
import MySkills from "./pages/MySkills";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Navbar stays constant across pages */}
        <div className="content">
          <Routes> 
            <Route path="/" element={<Home />} /> {/* Home page (default route) */}
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/myskills" element={<MySkills />} /> {/* Changed /MySkills to lowercase */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
