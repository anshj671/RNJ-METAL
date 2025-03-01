import React from 'react';
import "./About.css";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";

const About = () => {
  return (
    <div className='about-container'>
      <Navbar />
      
      <div className="hero-section">
        <h1 className="hero-title">Making a strong connection</h1>
        <p className="hero-description">
          RNJ Metal offers the highest quality in fastening technology serving OEMs worldwide. 
          We provide proven expertise in many markets including Automotive, Rail, EV, Industrial Automation, 
          and Robotics. Whether your fastening challenges are in Electrical or Mechanical Engineering, 
          RNJ Metal has a solution for your application.
        </p>
        <div className="video-section">
          <h3>The Trusted Expert Brand in Fastening Technology</h3>
          <iframe 
            className="about-video"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
            title="RNJ Metal Video"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="info-container">
        <div className="info-box">
          <h3>About RNJ Metal</h3>
          <p>Discover how we sustainably improve the productivity of our customers.</p>
          <img src="./img/about1.jpg" alt="About RNJ Metal" />
        </div>
        <div className="info-box">
          <h3>News and Press Releases</h3>
          <p>Read our latest announcements.</p>
          <img src="./img/about2.jpg" alt="News and Press Releases" />
        </div>
        <div className="info-box">
          <h3>Jobs and Careers</h3>
          <p>The more successful each of our employees is, the more successful we as a business can become.</p>
          <img src="./img/about3.jpg" alt="Jobs and Careers" />
        </div>
      </div>

      <div className="info-container">
        <div className="info-box">
          <h3>Resources</h3>
          <p>Find brochures, videos, documentation, and much more.</p>
          <img src="./img/about4.jpg" alt="Resources" />
        </div>
        <div className="info-box">
          <h3>Success Stories</h3>
          <p>Experience the Proven Productivity stories we developed together with our customers.</p>
          <img src="./img/about5.jpg" alt="Success Stories" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
