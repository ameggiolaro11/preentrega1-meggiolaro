import { CartContext } from "../../providers/CartProvider";
import { useContext } from "react";

export const Cart = () => {
  const { cart } = useContext(CartContext);
    return (
      <div>
        {cart.map( product => <div>{product.name}</div>)}
      </div>
    )
  }