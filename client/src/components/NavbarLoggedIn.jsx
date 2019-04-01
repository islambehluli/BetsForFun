import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"

const NavbarLoggedIn = () => {
  return (
    <nav className="nav-style">
      <ul>
        <li><Link to='/'>Home</Link></li>
        {/* <li><Link to='/signin'>Sign In</Link></li>
        <li><Link to='/signup'>Sign Up</Link></li> */}
        <li><Link to='/logout'>Log Out</Link></li>
        <li><Link to='/live'>live</Link></li>
        {/* <li><Link to='/blog'>my page</Link></li> */}
      </ul>
    </nav>
  )
}

export default NavbarLoggedIn;