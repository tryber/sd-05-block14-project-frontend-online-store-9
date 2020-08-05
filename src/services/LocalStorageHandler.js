export function AddToCart(id) {
  let cartItems = {};
  const locaCartItems = localStorage.getItem('cart');
  if (locaCartItems) {
    cartItems = { ...JSON.parse(locaCartItems) };
  }
  if (!Object.keys(cartItems).includes(id)) {
    cartItems[id] = 1;
  } else {
    cartItems[id] += 1;
  }
  localStorage.setItem('cart', JSON.stringify(cartItems));
}

export function getItemFromLocal() {
  let items = {};
  const localCartItems = localStorage.getItem('cart');
  if (localCartItems) { items = { ...JSON.parse(localCartItems) }; }
  return items;
}

export default { AddToCart, getItemFromLocal };
