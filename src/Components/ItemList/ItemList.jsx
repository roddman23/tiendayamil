import React from 'react';

const ItemList = ({ products }) => {
  return (
    <div>
      <h2>Lista de productos</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
