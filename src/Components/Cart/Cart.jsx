import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { CartContext } from '../CartContext/CartContext';
import './CartItem.css'; // Importa los estilos CSS

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          {cart.map((product) => (
            <div key={product.id} className="cart-item">
              <div className="cart-item-img">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="cart-item-info">
                <h3 className="cart-item-title">{product.name}</h3>
                <p className="cart-item-description">{product.description}</p>
                <p className="cart-item-price">Precio: ${product.price}</p>
                <p className="cart-item-quantity">Cantidad: {product.quantity}</p>
              </div>
              <div className="cart-item-buttons">
                <Button
                  className="cart-item-button cart-item-remove"
                  onClick={() => removeFromCart(product.id)}
                >
                  Eliminar
                </Button>
                <Button
                  className="cart-item-button cart-item-update"
                  onClick={() => updateQuantity(product.id, product.quantity + 1)}
                >
                  +
                </Button>
                <Button
                  className="cart-item-button cart-item-update"
                  onClick={() => updateQuantity(product.id, product.quantity - 1)}
                  disabled={product.quantity === 1}
                >
                  -
                </Button>
              </div>
            </div>
          ))}
          <hr />
          <Button variant="danger" onClick={() => clearCart()}>
            Vaciar Carrito
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
