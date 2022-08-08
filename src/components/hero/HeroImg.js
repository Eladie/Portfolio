import './HeroImg.css'
import Intro from '../../Img/Intro.jpg'
import React from 'react'
import { Link } from 'react-router-dom'

const HeroImg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='intro' src={Intro} alt='Intro'/>
        </div>
        <div className='content'>
            <p>Hi, I'm a freelancer.</p>
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