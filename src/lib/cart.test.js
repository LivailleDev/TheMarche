import { addItem, removeItem, cartTotal } from './cart';

const product = (id, price) => ({ id, name: `Product ${id}`, price, icon: '🛒', category: 'Test' });

describe('cart logic', () => {
  test('addItem adds a new product with amount 1', () => {
    const cart = addItem([], product('1', 2.0));
    expect(cart).toHaveLength(1);
    expect(cart[0].amount).toBe(1);
    expect(cart[0].checkout).toBeCloseTo(2.0);
  });

  test('addItem increments amount and checkout for an existing product', () => {
    let cart = addItem([], product('1', 2.5));
    cart = addItem(cart, product('1', 2.5));
    expect(cart).toHaveLength(1);
    expect(cart[0].amount).toBe(2);
    expect(cart[0].checkout).toBeCloseTo(5.0);
  });

  test('addItem does not mutate the input array', () => {
    const original = [];
    const result = addItem(original, product('1', 1));
    expect(original).toHaveLength(0);
    expect(result).not.toBe(original);
  });

  test('removeItem decrements amount when more than one', () => {
    let cart = addItem([], product('1', 2));
    cart = addItem(cart, product('1', 2)); // amount 2
    cart = removeItem(cart, product('1', 2));
    expect(cart[0].amount).toBe(1);
    expect(cart[0].checkout).toBeCloseTo(2);
  });

  test('removeItem removes the product when the last one is removed', () => {
    let cart = addItem([], product('1', 2));
    cart = removeItem(cart, product('1', 2));
    expect(cart).toHaveLength(0);
  });

  test('removeItem is a no-op for an unknown product', () => {
    const cart = addItem([], product('1', 2));
    const result = removeItem(cart, product('99', 5));
    expect(result).toEqual(cart);
  });

  test('cartTotal sums item checkouts', () => {
    let cart = addItem([], product('1', 1.5));
    cart = addItem(cart, product('2', 2.0));
    cart = addItem(cart, product('2', 2.0)); // 2 x 2.0
    expect(cartTotal(cart)).toBeCloseTo(5.5);
  });

  test('cartTotal of an empty cart is 0', () => {
    expect(cartTotal([])).toBe(0);
  });
});
