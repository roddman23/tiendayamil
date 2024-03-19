import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom

const ItemList = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="row">
      {products.map((product) => (
        <div key={product.id} className="col-md-4 mb-4">
          <Card>
            <Card.Img variant="top" src={product.image} alt={product.name} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>Precio: ${product.price}</Card.Text>
              <Button variant="primary" onClick={() => onAddToCart(product)}>
                Agregar al carrito
              </Button>
              {/* Utiliza el componente Link para redirigir al detalle del producto */}
              <Link to={`/item/${product.id}`} className="btn btn-secondary ml-2">
                Ver detalles
              </Link>
            </Card.Body>
          </Card>
        </div>
      ))}
      {/* Si hay un producto seleccionado, muestra los detalles */}
      {selectedProduct && (
        <div className="col-md-12 mt-4">
          <ItemDetail product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        </div>
      )}
    </div>
  );
};

export default ItemList;
