import React, { createContext, useState } from 'react';
import Products from '../constants/data';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {}
    for (let i = 1; i < Products.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
};

export const ShopContextProvider = (props) => {

    const [cartItems, setCartitems] = useState(getDefaultCart());
    const addToCart = (itemId) => {
        setCartitems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    };
    const removeFromCart = (itemId) => {
        setCartitems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    };

    const contextValue = { cartItems, addToCart, removeFromCart, };
    return (<ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>);
};

