import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar.jsx';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer.jsx';
import productos from './Components/Productos/productos.jsx'; // Importa los datos de productos desde productos.jsx

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <ItemListContainer productos={productos} />
          </Route>
          <Route path="/category/:id">
            <ItemListContainer productos={productos} />
          </Route>
          <Route path="/item/:id">
            <ItemDetailContainer productos={productos} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
