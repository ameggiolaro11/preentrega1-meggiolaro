import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
  return (
    <nav className="d-flex justify-content-around p-4">
        <img src="/img/logotipo.jpg" alt="" style={{width: "100px"}}/>
      <a className="navbar-brand" href="#">RASH SPORTS</a>
      <div>
      <button className="btn btn-primary mr-4">HOME</button>
      <button className="btn btn-primary mr-4">INDUMENTARIA</button>
      <button className="btn btn-primary mr-4">CALZADO</button>
      </div>
      <CartWidget />
    </nav>
  );
};

export default Navbar;
