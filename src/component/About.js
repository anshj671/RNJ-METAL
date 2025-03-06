import React from 'react';
import "./About.css";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import aboutimage from "./img/about.jpg"

const About = () => {
  return (
    <div className='about-container'>
      <Navbar />
      <div>
        <img src={aboutimage} alt='aboutimg'/>
      </div>

      <Footer />
    </div>
  );
};

export default About;
