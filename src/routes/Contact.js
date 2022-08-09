import React from 'react'
import Navbar from '../components/navBar/Navbar'
import Footer from '../components/footer/Footer'
import HeroImg2 from '../components/hero2/HeroImg2'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading='Contact.' text="Lets have a chat!"/>
      <Footer/>
    </div>
  )
}

export default Contact