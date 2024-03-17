import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import products from '../Products/products'; // Importa la variable 'products' desde productos.jsx

const ItemListContainer = () => {
  const { id } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Filtrar productos por categoría si hay un ID definido
    if (id) {
      const categoryProducts = products.filter(product => product.category === id);
      setFilteredProducts(categoryProducts);
    } else {
      setFilteredProducts(products);
    }
  }, [id]);

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
