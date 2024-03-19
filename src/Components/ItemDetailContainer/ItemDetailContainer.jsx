import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProductsById } from '../../../asyncMock';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getProductsById(parseInt(id));
        setProduct(productData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }

    return () => {
      // Cleanup function
    };
  }, [id]);

  return (
    <div>
      {loading ? (
        <p>Cargando detalles del producto...</p>
      ) : product ? (
        <ItemDetail product={product} />
      ) : (
        <p>No se encontró el producto</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
