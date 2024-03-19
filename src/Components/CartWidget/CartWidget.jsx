import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CartWidget = ({ itemCount }) => {
  return (
    <Link to="/cart" className="cart-widget">
      <FaShoppingCart />
      {itemCount > 0 && <span className="cart-item-count">{itemCount}</span>}
    </Link>
  );
};

export default CartWidget;
