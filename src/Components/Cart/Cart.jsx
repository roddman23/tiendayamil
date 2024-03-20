import React from 'react';
import { useCart } from '../CartContext/CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <h2>Carrito de compras</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            <span>{item.name}</span>
            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
