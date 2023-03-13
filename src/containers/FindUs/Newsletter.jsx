import React from 'react';
import './Newsletter.css';
import { GiPearlNecklace } from 'react-icons/gi';



const Newsletter = () => {
    return (

        <div className="app_newsletter app_bg">

            <div className="app_newsletter-heading">
                <div style={{ marginBottom: '1rem' }}>
                    <p className="p__cormorant">Newsletter</p>
                    <GiPearlNecklace color="blue" size={27} />
                </div>

                <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
                <p className="p__opensans">And never miss latest Updates!</p>
            </div>
            <div className="app_newsletter-input flex__center">
                <input type="email" placeholder="Enter your email address" />
                <button type="button" className="custom__button">Subscribe</button>
            </div>
        </div>
    )
}

export default Newsletter