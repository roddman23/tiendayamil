import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { CartContext } from '../CartContext/CartContext';
import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const { addToCart } = useContext(CartContext); // Obteniendo la función addToCart del contexto

  const featuredProducts = [
    {
      id: 5,
      category: 'nfl',
      name: 'Jersey NFL Cowboys',
      description: 'Jersey oficial de los Dallas Cowboys.',
      price: 45,
      image: 'https://github.com/roddman23/tiendayamil/blob/main/public/cowboys.jpg?raw=true',
    },
    {
      id: 3,
      category: 'nba',
      name: 'Camiseta NBA Warriors',
      description: 'Camiseta oficial de los Warriors de Golden State.',
      price: 38,
      image: 'https://github.com/roddman23/tiendayamil/blob/main/public/warriors.jpg?raw=true',
    },
  ];

  return (
    <div className="home-container">
      <h2 className="home-title">¡Bienvenido a nuestra tienda!</h2>
      <p className="home-description">
        En nuestra tienda encontrarás una amplia selección de productos de alta calidad. ¡Explora nuestras ofertas
        destacadas y encuentra exactamente lo que necesitas!
      </p>

      <h3 className="section-title">Productos Destacados</h3>
      <div className="featured-products-container">
        {featuredProducts.map((product) => (
          <div key={product.id} className="featured-product-card">
            <img src={product.image} alt={product.name} className="featured-product-img" />
            <div className="featured-product-body">
              <h4 className="featured-product-title">{product.name}</h4>
              <p className="featured-product-description">{product.description}</p>
              <p className="featured-product-price">Precio: ${product.price}</p>
              <div className="featured-product-buttons">
                <Link to={`/item/${product.id}`}>
                  <Button variant="primary" className="featured-product-button">
                    Ver Detalles
                  </Button>
                </Link>
                <Button
                  variant="primary"
                  className="custom-button"
                  onClick={() => addToCart(product)} // Utilizando la función addToCart del contexto
                >
                  Agregar al carrito
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="contact-section">
        <h3 className="section-title">Contacto</h3>
        <p>
          ¿Tienes alguna pregunta o sugerencia? No dudes en contactarnos. Estamos aquí para ayudarte en lo que necesites.
        </p>
        <div className="contact-icons">
          <a href="https://www.instagram.com/alamoscrew/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" />
          </a>
          <a href="https://wa.me/1161027670" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="icon" />
          </a>
          <a href="mailto:rodrigo.gasolero@gmail.com">
            <FaEnvelope className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
