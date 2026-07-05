import React, { createContext, useEffect, useRef, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const CartContext = createContext({});

const STORAGE_KEY = '@themarche:cart';

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [checkout, setCheckout] = useState(0);
  const loaded = useRef(false);

  // Restore the cart from device storage on startup.
  useEffect(() => {
    (async () => {
      try {
        const json = await AsyncStorage.getItem(STORAGE_KEY);
        if (json) {
          const items = JSON.parse(json);
          setCart(items);
          recalculate(items);
        }
      } catch {
        /* ignore storage errors */
      }
      loaded.current = true;
    })();
  }, []);

  // Persist the cart whenever it changes (after the initial restore).
  useEffect(() => {
    if (loaded.current) {
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(cart)).catch(() => {});
    }
  }, [cart]);

  function recalculate(items) {
    setCheckout(items.reduce((total, item) => total + item.checkout, 0));
  }

  function addItemCart(newItem) {
    setCart((current) => {
      const exists = current.some((item) => item.id === newItem.id);
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

  function clearCart() {
    setCart([]);
    setCheckout(0);
  }

  return (
    <CartContext.Provider value={{ cart, addItemCart, removeItemCart, clearCart, checkout }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
