import React from 'react'
import "./Home.css"
import Content from "./Content"
const Home = () => {
  return (
    <div className='home-container'>
        <p className='Title-tag1'>Powering Industry</p>
        <p className='Title-tag2'>with Precision</p>
        <p className='Title-tag3'>Lubrication & Solutions</p>

        <h1 className='Title'>RNJ METAL</h1>
        <Content />
    </div>
  )
}

export default Home