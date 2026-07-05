// Pure cart operations — no React or storage — so they are easy to unit-test.

export function addItem(cart, product) {
  const exists = cart.some((item) => item.id === product.id);
  return exists
    ? cart.map((item) =>
        item.id === product.id
          ? { ...item, amount: item.amount + 1, checkout: (item.amount + 1) * item.price }
          : item
      )
    : [...cart, { ...product, amount: 1, checkout: product.price }];
}

export function removeItem(cart, product) {
  const item = cart.find((it) => it.id === product.id);
  if (!item) return cart;
  return item.amount > 1
    ? cart.map((it) =>
        it.id === product.id
          ? { ...it, amount: it.amount - 1, checkout: (it.amount - 1) * it.price }
          : it
      )
    : cart.filter((it) => it.id !== product.id);
}

export function cartTotal(cart) {
  return cart.reduce((total, item) => total + item.checkout, 0);
}
