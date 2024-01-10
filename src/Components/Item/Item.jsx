import React, { useState, useContext } from 'react';  // Asegúrate de importar useContext
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import { ItemCount } from '../ItemCount/ItemCount';

export const Item = ({ id, name, img, description, price }) => {
  const { addItem } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
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
      <div className="card">
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <ItemCount stock={10} initial={1} onAdd={() => handleAddToCart()} />
          <Link to={`/item/${id}`}>
            <button className="btn btn-outline-success">Detalles</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
