import React from 'react';
import { Link } from 'react-router-dom';

const CartView = ({ cartItems }) => {
  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.name} - Cantidad: {item.quantity}
            </li>
          ))}
        </ul>
      ) : (
        <p>El carrito está vacío.</p>
      )}
      <Link to="/">Volver a la tienda</Link>
    </div>
  );
};

export default CartView;
