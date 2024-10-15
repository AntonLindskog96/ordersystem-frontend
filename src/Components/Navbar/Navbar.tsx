import React from 'react'
import "./Navbar.scss"
import { Outlet, Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to="/myTraining" className="title">Min Träning</Link>
    </div>
  )
}

export default Navbar
