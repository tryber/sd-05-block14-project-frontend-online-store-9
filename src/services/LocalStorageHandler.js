function AddToCart(id) {
  const cartItems = [];
  const locaCartItems = localStorage.getItem('cart');
  if (locaCartItems) {
    cartItems.push(...JSON.parse(locaCartItems));
  }
  cartItems.push(id);
  localStorage.setItem('cart', JSON.stringify(cartItems));
}

export default AddToCart;
