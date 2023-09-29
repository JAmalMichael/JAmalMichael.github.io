import React from 'react'
import logo1 from "../Assets/git.png"
import logo2 from "../Assets/Ig.png"
import logo3 from "../Assets/LinkedIn.png"

export default function Footer() {
  return (
    <div className='footer'>
      <p>Designed and Developed by Michael Igbanesi</p>
      <p> © Copyright 2023 </p>
      <ul className='foooter-list'>
        <li>
          <a href='https://github.com/JAmalMichael' target='_blank'> <img src={logo1} className='footer-logo'/> </a>
        </li>
        <li>
          <a href='https://www.instagram.com/' target='_blank'> <img src={logo2} className='footer-logo'/> </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/eshiomokhai-michael-68943a262?trk=contact-info' target='_blank'> 
          <img src={logo3} className='footer-logo'/> </a>
        </li>
      </ul>
    </div>
  )
}
