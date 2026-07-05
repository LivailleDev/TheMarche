import React, { createContext, useState } from 'react';

export const CartContext = createContext({});

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [checkout, setCheckout] = useState(0);

  function recalculate(items) {
    setCheckout(items.reduce((total, item) => total + item.checkout, 0));
  }

  function addItemCart(newItem) {
    setCart((current) => {
      const exists = current.some((item) => item.id === newItem.id);
      // Immutable update so React re-renders reliably.
      const updated = exists
        ? current.map((item) =>
            item.id === newItem.id
              ? { ...item, amount: item.amount + 1, checkout: (item.amount + 1) * item.price }
              : item
          )
        : [...current, { ...newItem, amount: 1, checkout: newItem.price }];
      recalculate(updated);
      return updated;
    });
  }

  function removeItemCart(product) {
    setCart((current) => {
      const item = current.find((it) => it.id === product.id);
      if (!item) return current;

      const updated =
        item.amount > 1
          ? current.map((it) =>
              it.id === product.id
                ? { ...it, amount: it.amount - 1, checkout: (it.amount - 1) * it.price }
                : it
            )
          : current.filter((it) => it.id !== product.id);
      recalculate(updated);
      return updated;
    });
  }

  return (
    <CartContext.Provider value={{ cart, addItemCart, removeItemCart, checkout }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
