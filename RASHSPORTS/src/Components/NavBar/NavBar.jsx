import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
  return (
    <nav className="d-flex justify-content-around p-4">
        <img src="/img/logotipo.jpg" alt="" style={{width: "100px"}}/>
      <a className="navbar-brand" href="#">RASH SPORTS</a>
      <div>
      <button className="btn btn-primary mr-4">CAMISETAS</button>
      <button className="btn btn-primary mr-4">BUZOS/CAMPERAS</button>
      <button className="btn btn-primary mr-4">GORRAS</button>
      <button className="btn btn-primary mr-4">BOTINES</button>
      <button className="btn btn-primary mr-4">PELOTAS</button>
      </div>
      <CartWidget />
    </nav>
  );
};

export default Navbar;
