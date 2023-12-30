import React from 'react';
import Navbar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart } from './Components';
import { CartContextProvider } from './providers/CartProvider';


function App() {
  return (
    <div>
      <BrowserRouter>
      <CartContextProvider>
        <Navbar />
        <Routes>
        <Route path="/" element={  <ItemListContainer />} />
        <Route path="/category/:category" element={  <ItemListContainer />} />
        <Route path="/item/:id" element={ <ItemDetailContainer />} />
        <Route path="/cart" element={ <Cart />} />
        </Routes>
        </BrowserRouter>
      </CartContextProvider>

    </div>
  );
}

export default App;
