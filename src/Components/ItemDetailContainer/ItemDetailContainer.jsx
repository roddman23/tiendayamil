import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProductsById } from '../../../asyncMock'; 

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct = await getProductsById(itemId);
        setProduct(fetchedProduct);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [itemId]);

  return (
    <div>
      {loading ? (
        <p>Cargando producto...</p>
      ) : product ? (
        <ItemDetail product={product} />
      ) : (
        <p>No se encontró el producto</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
