// En ItemListContainer.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ productos }) => {
  const { id } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Filtra los productos por la categoría especificada en la URL
    const categoryProducts = productos.filter(product => product.category === id);
    setFilteredProducts(categoryProducts);
  }, [id, productos]);

  return (
    <div>
      {filteredProducts.length ? (
        <ItemList products={filteredProducts} />
      ) : (
        <p>Cargando productos...</p>
      )}
    </div>
  );
};

export default ItemListContainer;
