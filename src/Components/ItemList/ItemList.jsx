import React from 'react';

const ItemList = ({ products }) => {
  return (
    <div>
      {/* Aquí va la lista de productos */}
      {products.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
