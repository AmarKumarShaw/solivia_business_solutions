import React from 'react';
import "./navbar.css";
import {Link} from "react-scroll"

const Navbar = () => {
  return (
    <div className='navbar'>
          <div className="navbar-left">
            <img className='nav-logo' src="./images/Final_Logo.webp" alt="Solivia Business Solutions Logo" />
            <p>Solivia Business Solutions</p>
          </div>
          <div className="navbar-center">
            <ul className="nav-link">
            <Link to="home" smooth={true} >
                  <li className="nav-link">Home</li>
                </Link>
                <Link to="grow" smooth={true} >
                <li className="nav-link">Growth</li>
                </Link>
                <Link to="service" smooth={true} >
                  <li className="nav-link">Services</li>
                </Link>
                <Link to="about" smooth={true} >
                <li className="nav-link">About</li>
                </Link>
                <Link to="support" smooth={true} >
                <li className="nav-link">Support</li>
                </Link>
                <Link to="contact" smooth={true} >
                <li className="nav-link">Contact</li>
                </Link>
            </ul>
          </div>
          <div className="navbar-right">
            <a href="mailto:info@soliviabusinesssolutions.com " className='btn-green btn-mail-curve'>Mail Us</a>
          </div>
    </div>
  )
}

export default Navbar