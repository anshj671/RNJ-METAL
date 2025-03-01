import React from 'react';
import "./Home.css";
import Navbar from "./Navbar.js";
import Footer from './Footer.js';

const Home = () => {
  return (
    <div className='home-container'>
        <Navbar />
        <div className='hero-section'>
            <p className='Title-tag1'>Powering Industry</p>
            <p className='Title-tag2'>with Precision</p>
            <p className='Title-tag3'>Lubrication & Solutions</p>
            <h1 className='Title'>RNJ METAL</h1>
        </div>

        <Footer />
    </div>
  )
}

export default Home;
