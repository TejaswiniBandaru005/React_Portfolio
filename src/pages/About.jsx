import React from 'react';
import './Home.css';

const About = () => {
  return (
    <>
    <div className="about">
      <h2>About Me</h2>
      <p>My Name is Tejaswini currently Purchuing my BTech in the Stream of Computer Science and Engineering in KITS College</p>
      <p>I am a full stack developer with experience in React, Node.js, and more!</p>
    </div>
      <img src="/images/kitsbg.jpeg" />
    <div className="details">
      <label htmlFor="email">Email Me</label><br />
      <label htmlFor="ph">Phone</label>
    </div>
    <div className="img2">
      <img src="/images/pic3.jpg" />
    </div>
    </>
  );
};

export default About;
