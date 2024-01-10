import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../Context/CartContext';

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const cartItemCount = cart ? cart.reduce((acc, item) => acc + item.quantity, 0) : 0;

  return (
    <div className="cart-widget d-flex">
      <FontAwesomeIcon icon={faShoppingCart} color="blue" />
      <p className="mx-2">{cartItemCount}</p>
    </div>
  );
};

export default CartWidget;
