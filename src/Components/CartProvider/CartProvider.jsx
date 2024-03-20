import React, { createContext, useContext, useReducer } from 'react';

// Creamos el contexto del carrito
const CartContext = createContext();

// Reducer para gestionar el estado del carrito
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
};

// Componente proveedor del contexto del carrito
export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, { cartItems: [] });

  // Función para agregar un item al carrito
  const addToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  // Función para quitar un item del carrito
  const removeFromCart = (itemId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
  };

  return (
    <CartContext.Provider value={{ cart: cartState.cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Función para usar el contexto del carrito
export const useCart = () => useContext(CartContext);
