import React from 'react';

const Item = ({ item }) => {
  return (
    <div className="item">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>${item.price}</p>
    </div>
  );
};

export default Item;
