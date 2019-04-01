import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"

const navbar = () => {
  return (
    <nav className="nav-style">
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/signin'>Sign In</Link></li>
        <li><Link to='/signup'>Sign Up</Link></li>
      </ul>
    </nav>
  )
}

export default navbar;