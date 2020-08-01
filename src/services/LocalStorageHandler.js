export function AddToCart(id) {
  const cartItems = [];
  const locaCartItems = localStorage.getItem('cart');
  if (locaCartItems) {
    cartItems.push(...JSON.parse(locaCartItems));
  }
  cartItems.push(id);
  localStorage.setItem('cart', JSON.stringify(cartItems));
}

export function getItemFromLocal() {
  const items = [];
  const localCartItems = localStorage.getItem('cart');
  if (localCartItems) { items.push(...JSON.parse(localCartItems)); }
  return items;
}

export default { AddToCart, getItemFromLocal };
