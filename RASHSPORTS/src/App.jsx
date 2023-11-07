import React from 'react';
import Navbar from './Components/NavBar/NavBar';
import CartWidget from './Components/CartWidget/CartWidget';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="Bienvenidos a RASH SPORTS" />
    </div>
  );
}

export default App;
