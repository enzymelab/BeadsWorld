
import React, { useState } from 'react';
//import { GiBlackBar, GiHamburgerMenu, GiPearlNecklace } from 'react-icons/gi';
import { Link } from "react-router-dom";
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
                <li className='p_opensans'><Link to="/">Home</Link></li>
                <li className='p_opensans'><Link to="/shop">Shop Beads</Link></li>
                <li className='p_opensans'><Link to="/diyidea">DIY Ideas</Link></li>
                <li className='p_opensans'><Link to="/shop">Shop Beads Product</Link></li>
                <li className='p_opensans'><Link to="/contact">Contact Us</Link></li>
            </ul>
            <div className="app_navbar-login">
                <a href="/signup" className='p_opensans'>
                    <button type="button">Sign up</button>
                </a>
                <div />
                <Link to="/signin" className='p_opensans'>
                    <button type="button">Sign in</button>
                </Link>
            </div>

            <div className="app_navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="black" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="black" size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className="app_navbar-menu_container scale-up-center">
                        <div className="app_navbar-menu_container-links_sign" >
                            <Link to="/signin" className='p_opensans'>
                                <button onClick={() => setToggleMenu(false)} type="button">Sign in</button>
                            </Link>
                        </div>
                        <div className="app_navbar-menu_container-links">

                            <li className='p_opensans'><Link to="/" onClick={() => setToggleMenu(false)}>Home</Link></li>
                            <li className='p_opensans'><Link to="/shop" onClick={() => setToggleMenu(false)}>Shop Beads</Link></li>
                            <li className='p_opensans'><Link to="/diyidea" onClick={() => setToggleMenu(false)}>DIY Ideas</Link></li>
                            <li className='p_opensans'><Link to="/shop" onClick={() => setToggleMenu(false)}>Shop Beads Product</Link></li>
                            <li className='p_opensans'><Link to="/contact" onClick={() => setToggleMenu(false)}>Contact Us</Link></li>

                            <div className="app_navbar-menu_container-links_sign">
                                <Link to="/signup" className='p_opensans'>
                                    <button onClick={() => setToggleMenu(false)} type="button">Sign up</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                )}
            </div>

        </nav >
    )
}

export default Navbar