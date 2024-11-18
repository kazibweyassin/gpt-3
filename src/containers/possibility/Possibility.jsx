import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/possibility.png'

function Possibility() {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Sign up for early Access </h4>
        <h1 className='gradient_text'>The possibilities are beyond our imagination</h1>
        <p>Explore the endless opportunities with our advanced AI technology. 
          Join us today and be a part of the future.</p>
          <h4>Request for Early Acess</h4>      
      </div>
    </div>
  )
}

export default Possibility

