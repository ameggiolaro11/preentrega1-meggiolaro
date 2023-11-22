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
        <Link to="/">
        <button className="btn btn-primary mr-4">HOME</button>
        </Link>
        <Link to="/category/Indumentaria">
        <button className="btn btn-primary mr-4">INDUMENTARIA</button>
        </Link>
        <Link to="/category/Calzado">
        <button className="btn btn-primary mr-4">CALZADO</button>
        </Link>
      </div>
      <Link to ="/cart">
      <CartWidget />
      </Link>
    </nav>
  );
};

export default Navbar;
