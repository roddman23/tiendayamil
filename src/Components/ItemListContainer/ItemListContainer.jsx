import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { useCart } from '../CartContext/CartContext';
import { db } from '../../firebase/config'; // Importamos la instancia de Firebase Firestore
import { collection, getDocs, query, where } from 'firebase/firestore'; // Importamos las funciones necesarias de Firestore

const ItemListContainer = () => {
  const { id } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsCollection = collection(db, 'productos'); // Referencia a la colección 'productos'
        let productsQuery;

        if (id) {
          // Si hay un ID de categoría en los parámetros de la URL, filtramos los productos por esa categoría
          productsQuery = query(productsCollection, where('category', '==', id));
        } else {
          // Si no hay un ID de categoría, obtenemos todos los productos
          productsQuery = productsCollection;
        }

        const querySnapshot = await getDocs(productsQuery);

        const products = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));

        setFilteredProducts(products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [id]);

  return (
    <div className="container">
      <ItemList products={filteredProducts} onAddToCart={addToCart} />
    </div>
  );
};

export default ItemListContainer;
