import React from 'react';
import { Link } from 'react-router-dom';  // Using React Router for navigation
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          My name is Tejaswini, currently pursuing my BTech in Computer Science and Engineering at KITS College.
        </p>
        <p>
          I am a full-stack developer with experience in HTML, CSS, JavaScript, and more!
        </p>
      </div>

      {/* You don't need to render the Project component here unless you have a specific reason */}
      {/* <div className="project">
        <Project />  {/* Remove this line unless you want it rendered here */}
      {/* </div> */}

      {/* Image overlay or other UI elements */}
      <div className="image-overlay"></div>
    </div>
    
  );
};

export default About;
