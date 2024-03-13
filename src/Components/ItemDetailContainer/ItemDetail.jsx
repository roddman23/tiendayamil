import React from 'react';

const ItemDetail = ({ item }) => {
  return (
    <div className="item-detail-container">
      <div className="item-detail-image">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="item-detail-info">
        <h2>{item.name}</h2>
        <p className="item-detail-price">Precio: ${item.price}</p>
        <p className="item-detail-description">Descripción: {item.description}</p>
        <button className="add-to-cart-button">Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ItemDetail;
