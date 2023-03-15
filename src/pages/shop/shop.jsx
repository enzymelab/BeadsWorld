import React from 'react';
import Products from '../../constants/data';
import Product from './product';
import './shop.css';


const Shop = () => {
    return (
        <div className='app_shop'>
            <div className='app_shop-title'>
                <h1>Beads Shop</h1>
            </div>
            <div className="app_shop-products">
                {Products.map((product) =>
                    <Product data={product} />)}</div>
        </div>
    )
}

export default Shop