import React from 'react'
import Navbar from '../components/navBar/Navbar'
import Footer from '../components/footer/Footer'
import HeroImg2 from '../components/hero2/HeroImg2'

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading='About.' text="I'm a friendly Front-End Developer."/>
      <Footer/>
    </div>
  )
};

export default About;