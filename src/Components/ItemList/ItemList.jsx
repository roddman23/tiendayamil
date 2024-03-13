// En src/Components/ItemList/ItemList.jsx

import React from 'react';

const ItemList = ({ products }) => {
  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <p>{product.name}</p>
            <p>Precio: {product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
