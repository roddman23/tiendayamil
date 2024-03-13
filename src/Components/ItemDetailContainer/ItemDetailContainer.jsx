import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { getItemById } from '../api'; // Suponiendo que tienes una función para obtener un artículo por su ID desde tu API

const ItemDetailContainer = () => {
  const { id } = useParams(); // Obtiene el parámetro de la URL
  const [item, setItem] = useState(null);

  useEffect(() => {
    // Llama a la función para obtener el detalle del artículo por su ID
    getItemById(id)
      .then((data) => {
        setItem(data); // Actualiza el estado con el artículo obtenido
      })
      .catch((error) => {
        console.error('Error fetching item:', error);
      });
  }, [id]); // Se ejecutará cada vez que cambie el parámetro 'id'

  return (
    <div>
      {item ? (
        <ItemDetail item={item} />
      ) : (
        <p>Cargando detalle del artículo...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
