// ItemListContainer.jsx

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { loadProductsByCategory } from '../api'; // Importa la función para cargar productos por categoría

const ItemListContainer = () => {
  const { id } = useParams(); // Obtén el ID de la categoría de la URL

  useEffect(() => {
    // Carga los productos correspondientes a la categoría
    loadProductsByCategory(id);
  }, [id]); // Vuelve a cargar los productos cuando cambia la ID de la categoría

  return (
    <div>
      {/* Renderiza la lista de productos */}
    </div>
  );
};

export default ItemListContainer;
