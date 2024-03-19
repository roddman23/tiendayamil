import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import ItemDetail from '../ItemDetail/ItemDetail'; // Importa el componente ItemDetail

const ItemList = ({ products, onAddToCart }) => {
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
              <Button variant="primary" onClick={() => handleAddToCart(product)}>
                Agregar al carrito
              </Button>
              <Button variant="secondary" className="ml-2" onClick={() => handleViewDetails(product)}>
                Ver detalles
              </Button>
            </Card.Body>
          </Card>
        </div>
      ))}
      {selectedProduct && (
        <div className="col-md-12 mt-4">
          <ItemDetail product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        </div>
      )}
    </div>
  );
};

export default ItemList;
