import React, { useState } from 'react';
import './Navbar.css';
import {AiOutlineMenu} from 'react-icons/ai'
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const emailAddress = "mideareke@gmail.com";

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo"><NavLink className='list' to='/'>ArekeAyo</NavLink></div>
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <ul className='ul'>
          <li><NavLink className='list' to='/'>Home</NavLink></li>
          <li><NavLink className='list' to='/projects'>My Projects</NavLink></li>
          <li><a href={`mailto:${emailAddress}`} className='list'>Contact</a></li>
        </ul>
      </div>
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <AiOutlineMenu/>
      </div>
    </nav>
  );
};

export default Navbar;