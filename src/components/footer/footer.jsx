import React from "react";
import './footer.css';
import images from "../../constants/images";
const NewFooter = () => {
    return (
        <div className="app_footer section__padding">

            <div className="app_footer-links">
                <div className="app_footer-links_logo">
                    <img src={images.logo1} alt="App_logo" />
                    <p>somewhere located on the earth <br /> All Rights Reserved</p>
                </div>
                <div className="app_footer-links_div">
                    <h4>SHOP</h4>
                    <p>Beads</p>
                    <p>Beads Jewelry</p>
                    <p>New Arrival</p>
                    <p>DIY Ideas</p>
                </div>
                <div className="app_footer-links_div">
                    <h4>Customer Service</h4>
                    <p>Order Status </p>
                    <p>Shipping and Return</p>
                    <p>Contact Info</p>
                </div>
                <div className="app_footer-links_div">
                    <h4>Get in touch</h4>
                    <p>somewhere located on the earth</p>
                    <p>123-456-7890</p>
                    <p>info@beadsworld.com</p>
                </div>
            </div>
            <div className="app_footer-copyright">
                <p>@2023 BeadsWorld. All rights reserved.</p>
            </div>
        </div>
    )
}

export default NewFooter;