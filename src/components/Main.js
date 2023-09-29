import React from 'react'
import Image1 from '../Assets/J.jpg'

export default function Main(props) {


  function scrollToContact() {
    props.intoContact.current.scrollIntoView({ behavior: 'smooth'})
  }

  return (
    <div className='top-pane' ref={props.intoMain}>
      <div className='top-leftpane'> 
      </div>
     <div className='top-textpane'>
        <h1> &lt; Hello WRLD &gt;  </h1>
        <h1>I'M MICHAEL IGBANESI</h1>
        <h4>A WEB DESIGNER/DEVELOPER</h4>
        <button 
        className='top-button' 
        onClick={scrollToContact}
        > Hire Me </button>
      </div>
      <div className='top-rightpane'>
      {<img src={Image1} className='top-paneImage'/>}
      </div>
    </div>
  )
}
