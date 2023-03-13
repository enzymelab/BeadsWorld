import React from 'react';

import Newsletter from '../FindUs/Newsletter';
import images from '../../constants/images';
import './footer.css';
import { GiPearlNecklace } from 'react-icons/gi';
const Footer = () => {
    return (

        <div className="app__footer app_bg " id="login">

            <Newsletter />

            <div className="app__footer-links">
                <div className="app__footer-links_contact">
                    <h1 className="headtext__cormorant" style={{ marginBottom: '1rem' }}>Contact Us</h1>
                    <div className="app__wrapper-content">
                        <p className="p__opensans">Email: info@beadsworld.com</p>
                        <p className="p__opensans">Order by phone: 123-456-7890</p>
                        <p className="p__opensans">Customer service: 800-123-4567</p>
                    </div>
                    <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visit Us</button>
                </div>

                <div className="app__footer-links_logo">
                    <img src={images.logo1} alt="footer_logo" />
                    <p className="p__opensans">&quot;find your own favorite handmade beads jewelry, discover hundreds of
                        glass, gemstone, metal beads and pearls for diy jewelry&quot;</p>
                    <GiPearlNecklace color="Green" size={27} />
                </div>

                <div className="app__footer-links_work">
                    <h1 className="headtext__cormorant" style={{ marginBottom: '1rem' }}>Working Hours</h1>
                    <p className="p__opensans">Monday-Friday:</p>
                    <p className="p__opensans">08:00 am - 10:00 pm</p>
                    <p className="p__opensans">Saturday-Sunday:</p>
                    <p className="p__opensans">12:00 pm - 6:00 pm</p>
                </div>
            </div>

            <div className="footer__copyright">
                <p className="p__opensans">2023 BeadsWorld. All Rights reserved.</p>
            </div>

        </div>



    )
}

export default Footer