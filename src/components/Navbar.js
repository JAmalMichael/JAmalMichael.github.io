import React from 'react'

export default function Navbar(props) {

  function scrollToHome() {
    props.intoMain.current.scrollIntoView({ behavior: 'smooth'})
  }
  function scrollToAbout() {
    props.intoAbout.current.scrollIntoView({ behavior: 'smooth'})
  }
  function scrollToProjects() {
    props.intoProject.current.scrollIntoView({ behavior: 'smooth'})
  }
  function scrollToContact() {
    props.intoContact.current.scrollIntoView({ behavior: 'smooth'})
  }


  return (
    <div className='nav'>
      <div className='nav1'>
      <h4>JamalMichael.</h4>  
        </div>
      <div className='nav2'>
        <ul className='nav-list'>
            <li> <a href='#' onClick={scrollToHome}>Home</a></li>
            <li><a href='#' onClick={scrollToAbout}>About Me</a></li>
            <li><a href='#' onClick={scrollToProjects}>Projects</a></li>
            <li><a href='#' onClick={scrollToContact}>Contact me</a></li>
        </ul>
      </div>
    </div>
  )
}
