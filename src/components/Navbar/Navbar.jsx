import React from 'react'
//import { GiHamburgerMenu } from 'react-icons/gi';
//import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='app_navbar'>
            <div className="app_navbar-logo">
                <img src={images.logo1} alt="app logo" />
            </div>
            <ul className="app_navbar-links">
                <li className='p_opensans'><a href="#home">Home</a></li>
                <li className='p_opensans'><a href="#about">About</a></li>
                <li className='p_opensans'><a href="#product">Beads Product</a></li>
                <li className='p_opensans'><a href="#beadstype">Beads Type</a></li>
                <li className='p_opensans'><a href="#contact">Contact Us</a></li>
            </ul>
        </nav>
    )
}

export default Navbar