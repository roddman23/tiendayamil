// Components/Catalogo/Catalogo.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import productos from '../Productos/productos'; // Ajuste en la importación

const Catalogo = () => {
  return (
    <div>
      <h2>Catálogo de Productos</h2>
      <div className="catalogo">
        {productos.map((producto) => (
          <div key={producto.id} className="producto">
            <Link to={`/detalle/${producto.id}`}>
              <img src={require(`./img/${producto.imagen}`).default} alt={producto.nombre} />
              <h3>{producto.nombre}</h3>
            </Link>
            <p>Precio: ${producto.precio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogo;
