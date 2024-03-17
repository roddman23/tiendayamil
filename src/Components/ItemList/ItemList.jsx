import React from 'react';

const ItemList = ({ products }) => {
  return (
    <div className="row">
      {products.map(product => (
        <div className="col-md-4 mb-4" key={product.id}>
          <div className="border p-3">
            <img src={product.image} alt={product.name} className="img-fluid mb-3" />
            <h5>{product.name}</h5>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
            <button className="btn btn-primary">Agregar al carrito</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
