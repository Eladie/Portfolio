import './NavStyle.css'

import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'

const Navbar = () => {
    const [click, setClick] = useState(true)
    const [navColor, setNavColor] = useState(false)

    const changeColor = () => {
        if(window.scrollY >= 100) {
            setNavColor(true)
        } else {
            setNavColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    const handleClick = () => {
        setClick(!click)
    }

  return (
    <div className={navColor ? 'header header-bg' : 'header'}>
        <Link to='/'>
            <h1>Portfolio</h1>
        </Link>

        <ul className={click ? 'nav-menu ' : 'nav-menu active'}>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/project'>Project</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
        </ul>

        <div className='hamburgher' onClick={handleClick}>
            {click ? (<FaBars size={20} style={{color:'#ffff'} }/>) : (
                <FaTimes size={20} style={{color:'#ffff'} }/>
            )}
        </div>

    </div>
  )
}

export default Navbar