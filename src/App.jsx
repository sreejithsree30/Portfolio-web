import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero'
import About from './Components/About/About'
import Education from './Components/Education/Education'
import Contacts from './Components/Contacts/Contacts'
import Projects from './Components/Projects/Projects'
import Footer from './Components/Footer/Footer'
import Skills from './Components/Skills/Skills'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App
