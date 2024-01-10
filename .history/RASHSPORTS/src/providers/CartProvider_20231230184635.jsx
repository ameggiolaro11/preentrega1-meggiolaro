import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    if (cart.find(i => i.id === item.id)) {
        return alert("El item ya se encuentra en el carrito")
    }
    setCart([...cart, item]);
    console.log("CART: ", cart);
  };

  const removeItem = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const removeAllItems = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, removeAllItems }}>
        {children}
    </CartContext.Provider>
  );
};
