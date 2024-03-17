import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { getProducts, getProductsByCategory } from '../../../../asyncMock'; // Importa las funciones para obtener productos

const ItemListContainer = () => {
  const { id } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        let fetchedProducts;
        if (id) {
          fetchedProducts = await getProductsByCategory(id);
        } else {
          fetchedProducts = await getProducts();
        }
        setFilteredProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [id]);

  return (
    <div>
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <ItemList products={filteredProducts} />
      )}
    </div>
  );
};

export default ItemListContainer;
