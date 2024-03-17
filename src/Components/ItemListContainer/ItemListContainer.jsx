import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { getProducts, getProductsByCategory } from '../../../../asyncMock';

const ItemListContainer = () => {
  const { id } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Obtener productos por categoría si hay un ID definido
      if (id) {
        const categoryProducts = await getProductsByCategory(id);
        setFilteredProducts(categoryProducts);
      } else {
        const allProducts = await getProducts();
        setFilteredProducts(allProducts);
      }
    };

    fetchData();
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
