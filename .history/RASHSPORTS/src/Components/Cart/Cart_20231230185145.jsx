import { CartContext } from "../../providers/CartProvider";
import { useContext } from "react";

export const Cart = () => {
  const { cart } = useContext(CartContext);
    return (
      <div>
        CARRITO
        {cart.map( product => <div>NOMBRE</div>)}
      </div>
    )
  }