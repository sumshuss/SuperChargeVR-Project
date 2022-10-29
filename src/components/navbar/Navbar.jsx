import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/super.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
      <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">About us</a></p>
          <p><a href="#features">Our Tech</a></p>
          <p><a href="#blog">Prices</a></p>
          <p><a href="#blog">FAQ</a></p>
          <p><a href="#blog">Gallery</a></p>
          <p><a href="#blog">Where to find us</a></p>

        </div>
        <button type="button">Contact us</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">About us</a></p>
          <p><a href="#features">Our Tech</a></p>
          <p><a href="#blog">Prices</a></p>
          <p><a href="#blog">FAQ</a></p>
          <p><a href="#blog">Gallery</a></p>
          <p><a href="#blog">Where to find us</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
