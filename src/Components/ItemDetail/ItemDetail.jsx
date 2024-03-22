import React, { useState } from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { useCart } from '../CartContext/CartContext'; // Importa el contexto del carrito
import './itemdetail.css'

const ItemDetail = ({ product }) => {
  const { addToCart } = useCart(); // Obtiene la función para agregar al carrito
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleAddToCart = () => {
    addToCart(product); // Agrega el producto al carrito utilizando la función del contexto
    setShowConfirmation(true); // Muestra el mensaje de confirmación
    setTimeout(() => {
      setShowConfirmation(false); // Oculta el mensaje de confirmación después de 2 segundos
    }, 2000);
  };

  return (
    <div className="item-detail-container">
      <Card>
        <Card.Img variant="top" src={product.image} alt={product.name} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>Precio: ${product.price}</Card.Text>
          <Button variant="primary" onClick={handleAddToCart}>
            Agregar al carrito
          </Button>
        </Card.Body>
      </Card>
      {showConfirmation && (
        <Alert variant="success" className="mt-3">
          ¡Producto agregado al carrito con éxito!
        </Alert>
      )}
    </div>
  );
};

export default ItemDetail;
