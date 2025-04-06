import React from 'react';
import './MySkills.css';
import { Link } from 'react-router-dom'; // Import Link component

const MySkills = () => {
  return (
    <>
      <div className="MySkills">
        <h2>My Skills</h2>
        <h3>Let’s Explore Popular Skills & Experience</h3>
        <p>I have Skills in full-stack development, working with various technologies...</p>
      </div>
      <div className="btn1">
        <button>
          <Link to="/contact" className="button">Click Me</Link>
        </button>
      </div>
      <div className="boxcontainer">
        <div className="skill-box">
          <img src="./images/illustrator.png" alt="Illustrator Logo" className="skill-img" />
          <h2>Adobe Illustrator</h2>
        </div>
        <div className="skill-box">
          <img src="./images/photoshop.png" alt="Photoshop Logo" className="skill-img" />
          <h2>Adobe Photoshop</h2>
        </div>
        <div className="skill-box">
          <img src="./images/ppt.png" alt="Power Point Presentation Logo" className="skill-img" />
          <h2>PowerPoint Presentation</h2>
        </div>
      </div>
    </>
  );
};

export default MySkills;
