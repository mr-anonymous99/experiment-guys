import React from 'react'
import {Routes,Route, Link} from "react-router-dom"

import About from '../pages/About'
import Contact from '../pages/Contact'
import Services from '../pages/Services'
const Navbar = () => {
  return (
    <>
    <nav className='flex justify-center  bg-indigo-100 h-fit py-3'>
        <ul  className='flex gap-25 '>
            <Link to="/" className=' px-3 py-1 hover:bg-indigo-50 rounded-xl'>Home</Link> |
            <Link to="/about" className=' px-3 py-1 hover:bg-indigo-50 rounded-xl'>About</Link> |
            <Link to="/contact" className=' px-3 py-1 hover:bg-indigo-50 rounded-xl'>Contact</Link> |
            <Link to="/services" className=' px-3 py-1 hover:bg-indigo-50 rounded-xl'>Services</Link> 
        </ul>
    </nav>
    </>          
  )
}

export default Navbar