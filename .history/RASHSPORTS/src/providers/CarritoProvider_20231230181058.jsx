import React, { createContext, useState, useContext } from 'react';

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