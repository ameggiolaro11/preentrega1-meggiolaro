import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import { ItemCount } from '../ItemCount/ItemCount';

export const Item = ({ id, name, img, description, price }) => {
  const { addItem } = useContext(CartContext);
  const handleAddToCart = (quantity) => {
    addItem({
      id,
      name,
      img,
      description,
      price,
    }, quantity);
  };

  return (
    <div className="col-md-2 mb-3">
      <div className="card h-100 d-flex flex-column">
        <div className="image-container d-flex align-items-center justify-content-center">
          <img
            src={img}
            className="card-img-top"
            alt={name}
            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
          />
        </div>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <ItemCount stock={10} initial={1} onAdd={handleAddToCart} />
          <br />
          <div className="text-center">
            <Link to={`/item/${id}`}>
              <button className="btn btn-outline-success mt-auto">Detalles</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
