import React from 'react'
import Image from '../Assets/J2.jpg'

export default function About(props) {


  return (
    <div className='about' ref={props.intoAbout}>
            <div className='about-text'>
            <h3><span className='highlighted'>Ab</span>out Me</h3>
            <p>
                Hello, Im thrilled to welcome you to my corner of the internet.<br/>
                Heres a bit about who I am and what I am passionate about.<br/>
                <br/>
                Passion-Driven Creator: Im a web desingner/developer with a deep <br/>
                passion for Creativity and Innovation. This website is showcase of my
                journey and my insights. <br/>
                <br/>
                Explorer: Im an avid explorer of life's many dimensions. I believe in <br/>
                the rapid expansion of the human knowledge and the opportunity for personal
                growth. Im seeking new adventures and learning experiences.
                <br/>
                <br/>
                Let's Connect: I'm not just a creator, but i also believe in connection <br/>
                and the power of community.I would love to hear from you and engage in 
                meaningful conversations. Do ensure to reach out to me.
                <br/>
                Thank you for visiting
                <br/>
                <br/>
            </p>
            <p>
            Name: IGBANESI MICHAEL .E. <br/>
            Tel: +234 905 347 7251 or +234 903 366 9879<br/>
            Email: eshimi090@gmail.com<br/>
            Address: Apapa, Lagos Nigeria</p>
        </div>
        <div className='about-image'>
            < img src= {Image} className='about-mainImage' />
            <div className='about-imageBackground'></div>
        </div>
        </div>
       
  )
}
 