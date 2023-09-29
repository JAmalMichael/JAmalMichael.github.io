import React,{useRef} from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const intoMain = useRef();
  const intoProject = useRef();
  const intoAbout = useRef();
  const intoContact = useRef();
  return (
    <div>
      <Navbar 
      intoMain={intoMain}
      intoAbout={intoAbout}
      intoProject={intoProject}
      intoContact={intoContact}
      />
      <Main
      intoMain={intoMain}
      intoContact={intoContact}
      />
      <About 
      intoAbout={intoAbout}
      />
      <Project
      intoProject={intoProject} 
      />
      <Contact 
      intoContact={intoContact}
      />
      <Footer 
      />
    </div>
  )
}
