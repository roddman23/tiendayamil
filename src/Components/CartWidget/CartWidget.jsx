// CartWidget.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = ({ itemCount }) => {
  return (
    <Link to="/cart">
      <FaShoppingCart /> <span>{itemCount}</span>
    </Link>
  );
};

export default CartWidget;
