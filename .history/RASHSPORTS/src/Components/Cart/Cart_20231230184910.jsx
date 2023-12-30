import { CartContext } from "../../providers/CartProvider";

export const Cart = () => {
  const { cart } = useContext(CartContext);
    return (
      <div>Cart</div>
    )
  }