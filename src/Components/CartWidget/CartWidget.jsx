// CartWidget.jsx
import React, { useContext } from 'react';
import { Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import { CartContext } from '../CartContext/CartContext'; // Importa el contexto del carrito
import { FaShoppingCart } from 'react-icons/fa'; // Importa el ícono de carrito

const CartWidget = () => {
  const { cart } = useContext(CartContext); // Obtiene el contexto del carrito
  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0); // Calcula la cantidad total de productos en el carrito

  return (
    <Link to="/cart" className="text-decoration-none text-dark"> {/* Agrega un enlace al carrito */}
      <div>
        <FaShoppingCart /> {/* Agrega el ícono de carrito */}
        <Badge pill bg="secondary">
          {cartItemCount}
        </Badge>
      </div>
    </Link>
  );
};

export default CartWidget;
