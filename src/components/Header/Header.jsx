import React from 'react';
import './Header.css';
import { BsSearchHeart } from 'react-icons/bs';
import { HiShoppingBag } from 'react-icons/hi';
import { BsHearts } from 'react-icons/bs';
import { Link, link } from "react-router-dom";
const Header = () => {
    return (
        <div className="app_header">
            <div class="middle-section">
                <input class="search-bar" type="text" placeholder="Search keywords, product name or catalog number" />
                <button class="search-button">
                    <BsSearchHeart color="white" size={27} onClick={() => { }} />
                    <div class="tooltip">Search</div>
                </button>
            </div>
            <div className='app_header-right'>
                <div className="app_header-wishlist">
                    <BsHearts color="red " size={27} />
                    <p>Wishlist</p>
                </div>
                <div className="app_header-cart">
                    <Link to="/cart">
                        <HiShoppingBag size={27} />
                        <p>Cart</p></Link>

                </div>
            </div>
        </div>
    )
}

export default Header