import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ItemDetail = ({ product }) => {
  return (
    <div className="container">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>Precio: ${product.price}</Card.Text>
          <Button variant="primary">Agregar al carrito</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemDetail;
