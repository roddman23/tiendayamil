import React, { createContext, useState, useContext } from 'react';

// Creamos el contexto del carrito
export const CartContext = createContext();

// Hook personalizado para acceder al contexto del carrito
export const useCart = () => {
  return useContext(CartContext);
};

// Proveedor del contexto del carrito
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0); // Nuevo estado para la cantidad total de elementos en el carrito

  // Agregar un producto al carrito
  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex((p) => p.id === product.id);
    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setTotalItems(totalItems + 1); // Incrementa la cantidad total de elementos en el carrito
  };

  // Eliminar un producto del carrito
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
    setTotalItems(totalItems - 1); // Decrementa la cantidad total de elementos en el carrito
  };

  // Actualizar la cantidad de un producto en el carrito
  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map((product) => {
      if (product.id === productId) {
        return { ...product, quantity: newQuantity };
      }
      return product;
    });
    setCart(updatedCart);
  };

  // Vaciar el carrito
  const clearCart = () => {
    setCart([]);
    setTotalItems(0); // Restablece la cantidad total de elementos en el carrito a 0
  };

  // Calcular el precio total del carrito
  const precioTotal = () => {
    return cart.reduce((total, product) => total + (product.price * product.quantity), 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, totalItems, precioTotal }}>
      {children}
    </CartContext.Provider>
  );
};
