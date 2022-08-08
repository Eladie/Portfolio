import React from 'react'
import Navbar from '../components/navBar/Navbar'
import Footer from '../components/footer/Footer'
import HeroImg2 from '../components/hero2/HeroImg2'

const Project = (props) => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading='Projects.' text="Some of my most recent projects"/>
      <Footer/>
    </div>
  )
}

export default Project;