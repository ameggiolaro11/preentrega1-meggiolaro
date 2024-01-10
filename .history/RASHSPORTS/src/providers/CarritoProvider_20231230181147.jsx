import React, { useState } from 'react';

const CartContext = createContext();

export default function({ defaultValue: [], children }) {
    const [ cart, setCart ] = useState(defaultValue);

    function isInCart(id) {
        return cart.includes(id);
    }

    function addToCart(item) {
        if(isInCart(item.id)) {
            return alert("El item ya se encuentra en el carrito");
        }

        setCart([...cart, item]);
    }

    return <CartContext.Provider value={{ cart, isInCart, addToCart }}>
        {children}
    </CartContext.Provider>
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
      throw new Error('useCart must be used within a CartProvider');
    }
    return context;
  }