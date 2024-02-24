// App.jsx

import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import FondoEcommerce from './Components/FondoEcommerce/FondoEcommerce';

const App = () => {
  return (
    <div>
      <NavBar />
      <FondoEcommerce />
      <ItemListContainer greeting="" />
    </div>
  );
};

export default App;
