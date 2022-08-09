import React from 'react'
import Navbar from '../components/navBar/Navbar'
import Footer from '../components/footer/Footer'
import HeroImg2 from '../components/hero2/HeroImg2'
import AboutContent from '../components/aboutContent/AboutContent';

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading='About.' text="I'm a friendly Front-End Developer."/>
      <AboutContent/>
      <Footer/>
    </div>
  )
};

export default About;