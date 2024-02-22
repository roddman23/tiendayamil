import React, { useState } from 'react';
import CartWidget from './CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
import logo from '../assets/logo.png'; // Importa el logo
import { FaShoppingCart } from 'react-icons/fa';
import './NavBar.css'; // Agrega un archivo CSS para estilos personalizados

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-light custom-navbar ${menuOpen ? 'menu-open' : ''}`}>
      <a className="navbar-brand" href="#">
        <img src={logo} alt="Logo" className="logo-img" />
        Malditos Alamos Crew
      </a>
      <button className="navbar-toggler" type="button" onClick={toggleMenu}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Inicio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Buzos NFL
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Camisetas NBA
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Buzos NBA
            </a>
          </li>
        </ul>
        <CartWidget itemCount={3} />
      </div>
    </nav>
  );
};

export default NavBar;
