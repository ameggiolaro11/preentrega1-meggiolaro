import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../CartWidget/CartWidget';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">RASH SPORTS</a>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#">Categoría 1</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Categoría 2</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Categoría 3</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Categoría 4</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Categoría 5</a>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default Navbar;
