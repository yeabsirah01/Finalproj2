import React from "react";
import { useState } from "react";
import { createContext } from "react";
import product from "../product.json";

export const ShopContext = createContext(null);

const getDefaultCarts = () => {
  let cart = {};
  for (let i = 1; i <= product.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvidor = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCarts());

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = product.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemID) => {
    setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] + 1 }));
  };

  const removeFromCart = (itemID) => {
    setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] - 1 }));
  };

  const deleteFromCart = (itemID) => {
    setCartItems((prev) => ({ ...prev, [itemID]: 0 }));
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    deleteFromCart,
    getTotalCartAmount,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
