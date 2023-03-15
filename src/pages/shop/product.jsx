import React, { useContext } from 'react';
import './shop.css';
import { ShopContext } from '../../context/shopcontext';
const Product = (props) => {
    const { id, imgUrl, title, price, tags } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);
    const cartItemAmount = cartItems[id];
    return (
        <div className='product'>
            <img src={imgUrl} alt="Product Image" />
            <div className="product_desc">
                <p><b>{title}</b></p>
                <p>{price}</p>
                <p>{tags}</p>
            </div>
            <button className='addToCartBttn' onClick={() => addToCart(id)}>
                Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
            </button>
        </div>
    )
};

export default Product;