
import React, { useState } from 'react'
//import { GiBlackBar, GiHamburgerMenu, GiPearlNecklace } from 'react-icons/gi';

import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <nav className='app_navbar'>
            <div className="app_navbar-logo">
                <img src={images.logo1} alt="app logo" />
            </div>
            <ul className="app_navbar-links">
                <li className='p_opensans'><a href="/">Home</a></li>
                <li className='p_opensans'><a href="#about">About</a></li>
                <li className='p_opensans'><a href="#beadstype">Beads Type</a></li>
                <li className='p_opensans'><a href="#product">Beads Product</a></li>
                <li className='p_opensans'><a href="/contact">Contact Us</a></li>
            </ul>
            <div className="app_navbar-login">
                <a href="#login" className='p_opensans'>
                    <button type="button">Sign up</button>
                </a>
                <div />
                <a href="/" className='p_opensans'>
                    <button type="button">Sign in</button>
                </a>
            </div>

            <div className="app_navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="black" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="black" size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className="app_navbar-menu_container scale-up-center">
                        <div className="app_navbar-menu_container-links_sign">
                            <button type="button">Sign in</button>
                        </div>
                        <div className="app_navbar-menu_container-links">

                            <li className='p_opensans'><a href="/">Home</a></li>
                            <li className='p_opensans'><a href="#about">About</a></li>
                            <li className='p_opensans'><a href="#beadstype">Beads Type</a></li>
                            <li className='p_opensans'><a href="#product">Beads Product</a></li>
                            <li className='p_opensans'><a href="/contact">Contact Us</a></li>

                            <div className="app_navbar-menu_container-links_sign">
                                <button type="button">Sign up</button>
                            </div>
                        </div>
                    </div>

                )}
            </div>

        </nav >
    )
}

export default Navbar