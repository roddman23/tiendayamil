import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Home from './Components/Home/Home'; // Importamos el componente para la sección de inicio
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Cart from './Components/Cart/Cart'; 
import { CartProvider } from './Components/CartContext/CartContext';
import './App.css'; // Importamos el archivo de estilos CSS

const App = () => {
  return (
    <Router>
      <CartProvider>
        <div className="app-container"> {/* Agregamos una clase para el contenedor principal */}
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} /> {/* Ruta para la sección de inicio */}
            <Route path="/products" element={<ItemListContainer />} /> {/* Ruta para la sección de productos */}
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<h4>404 NOT FOUND</h4>} />
          </Routes>
        </div>
      </CartProvider>
    </Router>
  );
};

export default App;
