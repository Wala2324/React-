import React from 'react'
import ProductListItems from './ProductListItems'
import HomePage from '../Pages/HomePage'

 

const Hero = (product) => {

    
  return (
    
    <div  className="hero-container">
      <div className='hero-section'>
        <div className='left-side'>
          <p className='hero-para'>WELCOME TO BMARKETO SHOP</p>
          <h1 className='hero-header'>Exclusive Chair gold Collection.</h1>
          <button className='hero-btn'>SHOP NOW</button>
        </div>
        <div className="right-side">
          <img className='hero-image' src='./public/assets/hero1.jpeg' alt="hero-image" /> 
         
        </div>
      </div>

    </div>
  )
}

export default Hero