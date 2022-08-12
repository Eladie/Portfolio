import './HeroImg.css'
import Intro from '../../Img/Intro.jpg'
import React from 'react'
import { Link } from 'react-router-dom'
import Typewriter from "typewriter-effect";

const HeroImg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='intro' src={Intro} alt='Intro'/>
        </div>
        <div className='content'>
            <p><span>Hi, I'm &nbsp;</span> 
              
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                }}
                onInit={(typewriter)=> {
                typewriter
                .typeString("Eladie.")
                .pauseFor(1000)
                .deleteAll()
                .typeString("a developer.")
                .pauseFor(1000)
                .start();
                }}
              />
            </p>
            <h1>React Developer.</h1>
            <div>
                <Link to='/project' className='btn'>Projects</Link>
                <Link to='/contact' className='btn btn-light'>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg