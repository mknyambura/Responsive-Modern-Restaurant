import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'

import images from '../../constants/images'
import './Navbar.css';

const Navbar = () => {
  const [ toggleMenu, setToggleMenu ] = React.useState(false)
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={images.gericht} alt="logo" />
      </div>
      <ul className='navbar-links'>
        <li className='p-opensans'><a href="#home">Home</a></li>
        <li className='p-opensans'><a href="#about">About</a></li>
        <li className='p-opensans'><a href="#menu">Menu</a></li>
        <li className='p-opensans'><a href="#awards">Awards</a></li>
        <li className='p-opensans'><a href="#contact">Contact</a></li>
      </ul>
      <div className="navbar-login">
        <a href="#login" className='p-opensans'>Log In or Sign Up</a>
        <div/>
        <a href="/" className='p-opensans'>Book a Table</a>
      </div>
      <div className="navbar-smallscreen">
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)}/>
        
        {toggleMenu && (
          <div className="navbar-smallscreen-overlay flex-center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay-close" onClick={() => setToggleMenu(false)}/>
            <ul className='navbar-smallscreen-links'>
              <li className='p-opensans'><a href="#home">Home</a></li>
              <li className='p-opensans'><a href="#about">About</a></li>
              <li className='p-opensans'><a href="#menu">Menu</a></li>
              <li className='p-opensans'><a href="#awards">Awards</a></li>
              <li className='p-opensans'><a href="#contact">Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
};

export default Navbar;
