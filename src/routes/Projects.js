import React from 'react'
import Navbar from '../components/navBar/Navbar'
import Footer from '../components/footer/Footer'
import HeroImg2 from '../components/hero2/HeroImg2'
import Work from '../components/work/Work'

const Project = (props) => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading='Projects.' text="Some of my most recent projects."/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Project;