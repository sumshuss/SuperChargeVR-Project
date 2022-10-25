import React, {useState} from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='spc__navbar'>
      <div className='spc__navbar-links'>
        <div className='spc__navbar-links_logo'>
          {/* <img src={logo} /> */}

        </div>
          <div className='spc__navbar_links_container'>
            <p><a href="Home">Home</a></p>
            <p><a href="About">About us</a></p>
            <p><a href="location">Where to find us?</a></p>
          </div> 
          <div className='spc__navbar-contact'>
            <button type="button"> Contact us!</button>
          </div>
          {/* <div className='spc__navbar-menu'>
            {toggleMenu=
            ? <RiCloseLine  color='#fff' size={27} onClick={() => setToggleMenu(false)}/>
            : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)}/>
            }
            {toggleMenu && (
              <div className='spc__navbar-menu-container scale-up-center'>
                <div className='spc__navbar-menu_container-links'>
                <p><a href="Home">Home</a></p>
                <p><a href="About">About us</a></p>
                <p><a href="location">Where to find us?</a></p>
              </div>
              </div>
            )}
          </div> */}
        </div>
    </div>
  )
}

export default Navbar
