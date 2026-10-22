import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Services from '../components/Services'
import Projects from '../components/Projects'  
import Work from '../components/Work'
import Education from '../components/Education'
import Achievements from '../components/Achievements'
import Contact from '../components/Contact'
import Footer from '../components/footer'


const Home = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Skills/>
      <Services />
      <Projects />
      <Work/>
      <Education />
      {/* <Achievements /> */}
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
