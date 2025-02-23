import React from 'react'

const NewsLetter = () => {
  return (
    <div className='newsletter-container'>
        <div className='newsletter-content'>
            <input className='newsletter-input' type="email" placeholder='Enter your mail here'/>
            <button className='newsletter-btn'>SUBSCRIBE FOR NEWSLETTER</button>
        </div>
    </div>
  )
}

export default NewsLetter