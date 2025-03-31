import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <>
      <div className="mainhome">
      <div className="home">
        <div className="text-container">
          <h2>Hello,</h2>
          <h2>Welcome to My Homepage</h2>
          <h3>I'm Tejaswini Bandaru Web Developer</h3>
          <h4>The only way to do great work is to love what you do.</h4>
          <button>Click Me</button>
        </div>
        <div className="img-container">
          <img src="/images/pic5.jpg" alt="Profile Pic" />
        </div>
        <div className="details">
          <h3>Student</h3>
          <h4>2nd BTech</h4>
          <h4>Computer Engineering and Sciences</h4>
        </div>
      </div>
      </div>
    </>
  );
};

export default Home;

