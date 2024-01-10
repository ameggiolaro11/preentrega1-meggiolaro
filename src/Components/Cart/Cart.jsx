// Cart.jsx
import React, { useContext } from 'react';
import { CartContext } from './../../Context/CartContext'; 

export const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      {cart.map((product) => (
        <div key={product.id}>
          <img src={product.img} alt={product.name} style={{ width: '50px', height: '50px' }} />
          <p>{product.name}</p>
        </div>
      ))}
    </div>
  );
};
