import React, { createContext, useEffect, useRef, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { addItem, removeItem, cartTotal } from '../lib/cart';

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
          setCheckout(cartTotal(items));
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

  function addItemCart(newItem) {
    setCart((current) => {
      const updated = addItem(current, newItem);
      setCheckout(cartTotal(updated));
      return updated;
    });
  }

  function removeItemCart(product) {
    setCart((current) => {
      const updated = removeItem(current, product);
      setCheckout(cartTotal(updated));
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
