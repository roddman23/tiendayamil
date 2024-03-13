// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Catalogo from './Components/Catalogo/Catalogo';
import DetalleProducto from './Components/DetalleProducto/DetalleProducto';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Catalogo} />
          <Route path="/detalle/:id" component={DetalleProducto} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
