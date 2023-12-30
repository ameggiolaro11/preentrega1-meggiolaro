import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="cart-widget d-flex">
      <FontAwesomeIcon icon={faShoppingCart} color='blue'/>
      <p className="mx-2">{cart.length}</p>
    </div>
  );
};

export default CartWidget;
