import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 2000);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, showSuccessMessage }}>
      {children}
    </CartContext.Provider>
  );
};
