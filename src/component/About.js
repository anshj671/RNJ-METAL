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
import Inspection from "./img/Inspection.jpg";
import cuttingtools from "./img/cuttingtool.webp";


const About = () => {
  return (
    <div className='about-container'>
      <Navbar />
      <div>
        <img src={aboutimage} alt='aboutimg'/>
      </div>

      <div className='about-content'>
        <h1 className='tagline'>Empowering Industries with Premium Tools & Lubricants</h1>
        <h1 className='about-title'>About Company</h1>
        <p className='about-text'>Our company is a leading manufacturer of lubricants in the United States. We have been in the business for over 50 years and have built a reputation for quality and reliability. Our products are used by millions of people around the world to keep their vehicles running smoothly and efficiently. We are committed to providing our customers with the best products and service possible, and we are always looking for ways to improve and innovate.
        </p>
      </div>
      <h1 className='about-title'>Our Products</h1>
      <div className='about-images'>
        
        <ImageCard image={lubricant} title='Lubricants'/>
        <ImageCard image={punches} title='Dies and Punches'/>
        <ImageCard image={solidcabidecuttingtools} title='Solid Carbide Cutting Tools'/>
        <ImageCard image={precisionequipment} title='Precision Equipment'/>
        <ImageCard image={bandsaw} title='Band Saws'/>
        <ImageCard image={Inspection} title='Inspection Equipment'/>
        <ImageCard image={cuttingtools} title='Cutting Tools'/>
        
      </div>  
      <Footer />
    </div>
  );
};

export default About;
