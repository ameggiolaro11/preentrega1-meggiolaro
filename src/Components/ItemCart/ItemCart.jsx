import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from "../../Context/CartContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const ItemCart = ({ id, name, price, img, quantity }) => {
  const { removeItem } = useContext(CartContext);
  const totalPrice = price * quantity;

  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="row no-gutters">
        <div className="col-md-4 d-flex align-items-center">
          <img src={img} className="card-img" alt="Product" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">${price}</p>
            <p className="card-text">Cantidad: {quantity}</p>
            <p className="card-text">Subtotal: ${totalPrice}</p>
            <button
              className="btn btn-danger"
              onClick={() => removeItem(id)}
            >
              <FontAwesomeIcon icon={faTrash} /> Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
