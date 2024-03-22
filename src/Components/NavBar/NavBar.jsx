import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaShoppingCart } from 'react-icons/fa';
import './NavBar.css';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
      <Link to="/" className="navbar-brand">
        <img src="https://github.com/roddman23/tiendayamil/blob/main/src/assets/logo.png?raw=true" alt="Logo" className="logo-img" />
        Malditos Alamos Crew
      </Link>
      <button className="navbar-toggler" type="button" onClick={toggleMenu}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''} custom-navbar-collapse`}>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Inicio
            </Link>
          </li> 
          <li className="nav-item">
            <Link to="/products" className="nav-link">
              Productos
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/category/nfl" className="nav-link">
              Jersey NFL
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/category/nba" className="nav-link">
              Camisetas NBA
            </Link>
          </li>
        </ul>
        <CartWidget itemCount={0} />
      </div>
      {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </nav>
  );
};

export default NavBar;
