import React from 'react';

const ItemDetail = ({ product, onClose }) => {
  if (!product) {
    return null;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <img src={product.image} alt={product.name} />
      <button onClick={onClose}>Cerrar</button>
    </div>
  );
};

export default ItemDetail;
