import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = ({ products }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const selectedProduct = productos.find(product => product.id === parseInt(id));
    setProduct(selectedProduct);
  }, [id, products]);

  return (
    <div>
      {product ? (
        <ItemDetail item={product} />
      ) : (
        <p>Cargando producto...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
