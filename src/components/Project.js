import React from 'react'
import Image1 from '../Assets/blog site.jpg'
import Image2 from '../Assets/Editor.jpg'
import Image3 from '../Assets/tenzies.jpg'

export default function Project(props) {

  return (
    <div className='project' ref={props.intoProject}>
        <h2 className='project-heading'>Projects</h2>
        <div className='project-body'>
            <a href='https://adastra-reviews.netlify.app/' target='_blank' className='box1'>
            <img src={Image1} className='project-image'/>
            <h2 className='grid-text'> Blog Site</h2>
            </a>
            <a href='https://jonline-editor.netlify.app/' target='_blank' className='box2'>
            <img src={Image2} className='project-image'/>
            <h2 className='grid-text'> Online Coding Editor</h2>
            </a>
            <a href='https://jtenzies.netlify.app/' target='_blank' className='box3'>
            <img src={Image3} className='project-image'/>
            <h2 className='grid-text'> A Game of Tenzies</h2>
            </a>
        </div>
    </div>
  )
}
