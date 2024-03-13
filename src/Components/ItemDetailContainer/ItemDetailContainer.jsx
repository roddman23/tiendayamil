// En ItemDetailContainer.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({ productos }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Encuentra el producto por su ID en la lista de productos
    const selectedProduct = productos.find(product => product.id === parseInt(id));
    setProduct(selectedProduct);
  }, [id, productos]);

  return (
    <div>
      {product ? (
        <ItemDetail product={product} />
      ) : (
        <p>Cargando producto...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
