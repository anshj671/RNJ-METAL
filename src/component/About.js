import React from 'react';
import "./About.css";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import aboutimage from "./img/about.jpg"
import ImageCard from './ImageCard.js';
import lubricant from "./img/lubricant.jpg";
import punches from "./img/punches.jpg";
import solidcabidecuttingtools from "./img/solidcarbide.jpeg";
import precisionequipment from "./img/precisionequiment.jpg";
import bandsaw from "./img/bandsaw.jpg";


const About = () => {
  return (
    <div className='about-container'>
      <Navbar />
      <div>
        <img src={aboutimage} alt='aboutimg'/>
      </div>

      <div className='about-content'>
        <h1>About Us</h1>
        <p>Our company is a leading manufacturer of lubricants in the United States. We have been in the business for over 50 years and have built a reputation for quality and reliability. Our products are used by millions of people around the world to keep their vehicles running smoothly and efficiently. We are committed to providing our customers with the best products and service possible, and we are always looking for ways to improve and innovate.</p>
      </div>

      <div className='about-images'>
        <ImageCard image={lubricant} title='Lubricants'/>
        <ImageCard image={punches} title='Dies and Punches'/>
        <ImageCard image={solidcabidecuttingtools} title='Solid Carbide Cutting Tools'/>
        <ImageCard image={precisionequipment} title='Precision Equipment'/>
        <ImageCard image={bandsaw} title='Band Saws'/>
        
      </div>  
      <Footer />
    </div>
  );
};

export default About;
