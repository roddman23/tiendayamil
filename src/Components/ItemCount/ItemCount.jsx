import React, { useState } from 'react';

const ItemCount = ({ initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    onAdd(count);
  };

  return (
    <div className="item-count">
      <button onClick={handleDecrement}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ItemCount;
