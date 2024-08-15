import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../asset/logo.png'
import menu_icon from '../../asset/menu-icon.png'
const Navbar = () => {
  const [stick,setStick] = useState(false)

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      window.scrollY>500 ? setStick(true): setStick(false)
    })
  },[])

  const [mobileMenu,setMobileMenu] = useState(false)
  const toggleMenu = ()=>{
    mobileMenu?setMobileMenu(false):setMobileMenu(true)
  }
  return (
    <nav className={`container ${stick? 'dark-nav':''}`}>
        <img src={logo} alt=""  className='logo'/>
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
          <li><link to='hero' smooth={true} offset={0} duration={500}></link>Home</li>
          <li><link to='program' smooth={true} offset={0} duration={500}></link>Program</li>
          <li><link to='about' smooth={true} offset={0} duration={500}></link>About Us</li>
          <li><link to='campus' smooth={true} offset={0} duration={500}></link>Campus</li>
          <li><link to='testimonials' smooth={true} offset={0} duration={500}></link>Testimonals</li>
          <li><link to='contact' smooth={true} offset={0} duration={500} className='btn'></link>Contact</li>
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar

