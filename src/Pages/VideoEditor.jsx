import { useState, useEffect } from 'react'
import '../App.css'
import Navbar from '../componentsVE/Navbar.jsx'
import Home from '../componentsVE/Home.jsx'
import About from '../componentsVE/About.jsx'
import Work from '../componentsVE/Work.jsx'
import Contact from '../componentsVE/Contact.jsx'
import Skills from '../componentsVE/Skills.jsx'
import Aos from 'aos'
import 'aos/dist/aos.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    Aos.init({duration:1000})
  }, [])
  
  return (
    <div className='bg-[#0a192f]'>
      <Navbar animation='fade-down' />
      <Home animation='flip-left'/>
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  )
}

export default App
