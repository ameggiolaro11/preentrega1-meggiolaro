import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { ItemCart } from "../ItemCart/ItemCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export const Cart = () => {
  const { cart, removeAllItems } = useContext(CartContext);
  const totalPrice = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);

  const handleConfirmPurchase = () => {
    
  };

  return (
    <div>
      {cart.map((product) => (
        <ItemCart
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          img={product.img}
          quantity={product.quantity}
        />
      ))}
      <div className="total-price">
        <h4>Total: ${totalPrice}</h4>
      </div>
      <div className="buttons-container">
        <button className="btn btn-danger" onClick={removeAllItems}>
          <FontAwesomeIcon icon={faTrash} /> Limpiar carrito
        </button>
        <button className="btn btn-success" onClick={handleConfirmPurchase}>
          <FontAwesomeIcon icon={faShoppingCart} /> Confirmar compra
        </button>
      </div>
    </div>
  );
};
