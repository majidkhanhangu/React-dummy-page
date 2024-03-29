import React from 'react'
import './Navbar.css'
import logo from "../images/hong-kong-logo-black-.png"
const Navbar = () => {
  return (
    <>
    <div className="">
    <div className='row'>
    <nav>
    <div className='logo'>
    <img src={logo} alt="" /></div>
    <div className='menu'>
    <ul>
    <li className='fs-3'>Home</li>
    <li className='fs-3'>Visit</li>
    <li className='fs-3'>About</li>
    </ul>
    </div>
    </nav>
    </div>
    </div>
    </>
  )
}

export default Navbar
