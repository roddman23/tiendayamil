import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { db } from '../../firebase/config'; // Importamos la instancia de Firebase Firestore
import { doc, getDoc } from 'firebase/firestore'; // Importamos las funciones doc() y getDoc()

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productRef = doc(db, 'productos', id); // Referencia al documento del producto
        const docSnap = await getDoc(productRef);

        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log('No such document!');
        }

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
