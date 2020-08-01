import React, { Component } from 'react';

class ItemCart extends Component {
  render() {
    const { product: { title } } = this.props;
    return (
      <div>
        <span
          data-testid="shopping-cart-product-name"
        >
          {title}
        </span>
        <span data-testid="shopping-cart-product-quality" />
      </div>
    );
  }
}

export default ItemCart;
