import { CartContext } from "../../providers/CartProvider";

export const Cart = () => {
  const { cart } = useContext(CartContext);
    return (
      <div>
        {cart.map( product => <div>{product.name}</div>)}
      </div>
    )
  }