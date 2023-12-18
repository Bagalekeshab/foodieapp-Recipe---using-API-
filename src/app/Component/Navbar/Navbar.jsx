"use client"
import React, { useRef } from 'react'
import './Navbar.css'

import {FaInstagramSquare,FaTwitterSquare,FaBars, FaTimes} from "react-icons/fa";

import { fromJSON } from 'postcss';

function Navbar() {

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("Responsive_nav")
  }
 

  return (
    <nav className='Navbar'>

    <div className="container">
      <h1>
        <span>Recipe</span>
      </h1>
      <div className="menu-icon" ref={navRef}>
        <a href=''>Drink</a>
        <a href=''>Resturant</a>
        <a href=''>Travel</a>
        <a href=''>Facts</a>
        
        <button className='nav-btn  nav-close-btn' onClick={showNavbar}>
          <FaTimes/>

        </button>
      </div>
      <div className="social_media">
      <a href='https://www.instagram.com/'><FaInstagramSquare/></a>
      <a href='https://twitter.com/'><FaTwitterSquare/></a>
      </div>

      <button className='nav-btn' onClick={showNavbar} >
        <FaBars/>
      </button>

    </div>

  </nav>
  )
}


export default Navbar
