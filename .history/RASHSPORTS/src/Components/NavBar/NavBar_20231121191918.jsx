import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="d-flex justify-content-around p-4">
        <img src="/img/logotipo.jpg" alt="" style={{width: "100px"}}/>
      <a className="navbar-brand" href="#">RASH SPORTS</a>
      <div>
        <link to="/">
        <button className="btn btn-primary mr-4">HOME</button>
        </link>
        <link to="/category/Indumentaria">
        <button className="btn btn-primary mr-4">INDUMENTARIA</button>
        </link>
        <link to="/category/Calzado">
        <button className="btn btn-primary mr-4">CALZADO</button>
        </link>
      </div>
      <link to ="/cart">
      <CartWidget />
      </link>
    </nav>
  );
};

export default Navbar;
