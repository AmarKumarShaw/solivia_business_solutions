import React from 'react';
import "./navbar.css";
import {Link} from "react-scroll"




const Navbar = () => {
  return (
    <div className='navbar'>
          <div className="navbar-left">
            <img src="./images/girls.png" alt="" />
            <p>Rashi Chakaraborty</p>
          </div>
          <div className="navbar-center">
            <ul className="nav-link">
                <li className="nav-link">Home</li>
                <a href="#service">
                  <li className="nav-link">Services</li>
                </a>
                <li className="nav-link">About</li>
                <li className="nav-link">Contact</li>
            </ul>
          </div>
          <div className="navbar-right">
            <button className='btn-green '>Email Us</button>
          </div>
    </div>
  )
}

export default Navbar