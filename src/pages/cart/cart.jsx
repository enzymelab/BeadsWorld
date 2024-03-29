import React, { useContext } from "react";
import { ShopContext } from "../../context/shopcontext";
import Products from '../../constants/data';
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

import "./cart.css";
export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {Products.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/shop")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/signin");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <div className="app_shopcart">
          <h1> Your Shopping Cart is Empty</h1>
        </div>
      )}
    </div>
  );
};
