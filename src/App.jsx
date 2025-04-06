// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Navbar from "./components/Navbar"; 
import Home from "./pages/Home"; 
import About from "./pages/About";
import Project from "./pages/Project";  // Import Project component
import MySkills from "./pages/MySkills";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes> 
            <Route path="/" element={<Home />} /> 
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />  {/* Route for the Project component */}
            <Route path="/myskills" element={<MySkills />} /> 
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
