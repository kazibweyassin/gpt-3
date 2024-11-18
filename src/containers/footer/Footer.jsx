import React from 'react'
import './footer.css'
import gptLogo from '../../assets/logo.svg'

function Footer() {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();

  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to step in the future before others!</h1>
      </div>
      <div className='gpt3__footer-btn'>
        <p>Request Early Access</p>
      </div>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={gptLogo} alt="logo" />
          <p> Be part of something amazing </p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Privary</p>
          <p>Contacts</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Terms and Conditions </p>
          <p>Privary Policy Media</p>
          <p>Contacts</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Get in Touch</h4>
          <p>Mengo</p>
          <p>Acess Bulding  </p>
          <p>+256704833021</p>
          <p>info@buyme.com</p>
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p>© {year} GPT-3. All rights reserved. {day} {month} {year}</p>
      </div>
    </div>
  )
}

export default Footer