import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
  return (
    <div className="cart-widget d-flex">
      <FontAwesomeIcon icon={faShoppingCart} color='blue'/>
      <p className="mx-2">1</p>
    </div>
  );
};

export default CartWidget;
