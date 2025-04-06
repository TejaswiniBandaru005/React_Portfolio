// Contact.jsx
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <div className="contact">
        <h2>Contact Me</h2>
        <p>Gmail: bandarutejaswini8@gmail.com.</p>
        <p>
          LinkedIn: 
          <a href="https://www.linkedin.com/in/bandaru-tejaswini-444517325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            My LinkedIn Profile
          </a>
        </p>
      </div>

      <div className="form-container">
        <div className="form-box">
          <form onSubmit={handleSubmit}>
            <label htmlFor="fullname">Full Name</label>
            <input 
              type="text" 
              name="fullname" 
              id="fullname" 
              value={formData.fullname} 
              onChange={handleChange} 
              placeholder="Enter your full name" 
              required 
            />
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="Enter your email" 
              required 
            />
            <label htmlFor="phone">Phone Number</label>
            <input 
              type="tel" 
              name="phone" 
              id="phone" 
              value={formData.phone} 
              onChange={handleChange} 
              placeholder="Enter your phone number" 
              required 
            />
            <label htmlFor="message">Message</label>
            <textarea 
              name="message" 
              id="message" 
              value={formData.message} 
              onChange={handleChange} 
              placeholder="Enter your message" 
              required 
            />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
