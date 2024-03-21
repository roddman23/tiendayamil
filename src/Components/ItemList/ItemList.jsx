import React, { useState } from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import './ItemList.css';

const ItemList = ({ products, onAddToCart }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  const addToCartAndShowConfirmation = (product) => {
    onAddToCart(product);
    setShowConfirmation(true);
    setTimeout(() => {
      setShowConfirmation(false);
    }, 2000);
  };

  return (
    <div className="row">
      {products.map((product) => (
        <div key={product.id} className="col-md-4 mb-4">
          <Card className="custom-card">
            <Card.Img variant="top" src={product.image} alt={product.name} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>Precio: ${product.price}</Card.Text>
              <Button
                variant="primary"
                className="custom-button"
                onClick={() => addToCartAndShowConfirmation(product)}
              >
                Agregar al carrito
              </Button>
              {/* Utilizamos el componente Link para redirigir al detalle del producto */}
              <Link to={`/item/${product.id}`} className="btn btn-secondary custom-button">
                Ver detalles
              </Link>
            </Card.Body>
          </Card>
        </div>
      ))}
      {showConfirmation && (
        <Alert variant="success" className="mt-3">
          ¡Producto agregado al carrito con éxito!
        </Alert>
      )}
      {selectedProduct && (
        <div className="col-md-12 mt-4">
          <ItemDetail product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        </div>
      )}
    </div>
  );
};

export default ItemList;
