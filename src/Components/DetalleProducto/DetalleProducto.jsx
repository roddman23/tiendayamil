// Components/DetalleProducto/DetalleProducto.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import productos from '../Productos/productos'; // Ajuste en la importación

const DetalleProducto = () => {
  const { id } = useParams();
  const producto = productos.find((producto) => producto.id === parseInt(id));

  if (!producto) {
    return <div>Producto no encontrado</div>;
  }

  // Selecciona la imagen correspondiente según el nombre del equipo
  let imagen;
  switch (producto.nombre) {
    case 'Camiseta NBA Lakers':
      imagen = require('./img/lakers.jpg').default;
      break;
    case 'Camiseta NBA Bulls':
      imagen = require('./img/bulls.jpg').default;
      break;
    case 'Camiseta NBA Warriors':
      imagen = require('./img/warriors.jpg').default;
      break;
    case 'Jersey NFL Patriots':
      imagen = require('./img/patriots.jpg').default;
      break;
    case 'Jersey NFL Cowboys':
      imagen = require('./img/cowboys.jpg').default;
      break;
    case 'Jersey NFL Packers':
      imagen = require('./img/packers.jpg').default;
      break;
    default:
      imagen = null;
  }

  return (
    <div>
      <h2>Detalle del Producto</h2>
      <div className="detalle-producto">
        <img src={imagen} alt={producto.nombre} /> {/* Utiliza la imagen correspondiente */}
        <h3>{producto.nombre}</h3>
        <p>{producto.descripcion}</p>
        <p>Precio: ${producto.precio}</p>
      </div>
    </div>
  );
};

export default DetalleProducto;
