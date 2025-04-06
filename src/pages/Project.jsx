import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import './Project.css';

const Project = () => {
  return (
    <>
      <div className="Project">
        <h2>My Projects</h2>
        <p>Here are some of the projects I have worked on...</p>
      </div>

      <div className="projectcontainer">
        <div className="project-box">
          <img src="./images/todo.jpeg" alt="To Do Logo" className="project-img" />
          <h2>To Do List</h2>
          <a href="https://tejaswinibandaru005.github.io/To-Do-Application/" className="project-link" target="_blank" rel="noopener noreferrer">
            <button className="project-button">View Project</button>
          </a>
        </div>

        <div className="project-box">
          <img src="./images/weather.jpeg" alt="Weather Logo" className="project-img" />
          <h2>Weather Report</h2>
          <a href="https://tejaswinibandaru005.github.io/Weather-Condition/" className="project-link" target="_blank" rel="noopener noreferrer">
            <button className="project-button">View Project</button>
          </a>
        </div>

        <div className="project-box">
          <img src="./images/theater.jpeg" alt="Theater Logo" className="project-img" />
          <h2>Movie Card</h2>
          <a href="https://tejaswinibandaru005.github.io/Background-Changes/" className="project-link" target="_blank" rel="noopener noreferrer">
            <button className="project-button">View Project</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Project;
