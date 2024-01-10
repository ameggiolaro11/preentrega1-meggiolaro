// CartContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext(null);

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    const { id, img, name, price } = item;

    const index = cart.findIndex((element) => element.id === id);

    if (index !== -1) {
      const cartCopy = [...cart];

      cartCopy[index].quantity += quantity;
      cartCopy[index].subTotal = cartCopy[index].quantity * cartCopy[index].price;

      setCart(cartCopy);
    } else {
      const newItem = {
        id,
        name,
        img,
        price,
        quantity,
        subTotal: quantity * price,
      };
      setCart([...cart, newItem]);
    }
  };

  const removeItem = (id) => {
    const itemsForRemove = cart.filter((item) => item.id !== id);
    setCart(itemsForRemove);
  };

  const removeAllItems = () => {
    setCart([]);
  };

  const handleTotalCart = () => {
    const total = cart.reduce((acum, item) => acum + item.subTotal, 0);
  };

  const handleTotalProductsCart = () => {
    const total = cart.reduce((acum, item) => acum + item.quantity, 0);
  };

  useEffect(() => {
    handleTotalCart();
    handleTotalProductsCart();
  }, [cart]);

  const contextValue = {
    cart,
    addItem,
    removeItem,
    removeAllItems,
  };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};
