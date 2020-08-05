import React, { Component } from 'react';

export default class ProductQuantity extends Component {
  constructor(props) {
    super(props);
    const { quantity } = this.props;
    this.state = { quantity };
    this.increaseItem = this.increaseItem.bind(this);
    this.decreaseItem = this.decreaseItem.bind(this);
  }

  increaseItem(changeQuantity) {
    const { quantity } = this.state;
    const { initialQuantity } = this.props;
    if (quantity <= initialQuantity) {
      const newQuantity = quantity + 1;
      this.setState({ quantity: newQuantity });
      changeQuantity(newQuantity);
    }
  }

  decreaseItem(changeQuantity) {
    const { quantity } = this.state;
    const newQuantity = quantity - 1;
    if (quantity > 0) {
      this.setState({ quantity: newQuantity });
      changeQuantity(newQuantity);
    }
  }

  render() {
    const { changeQuantity } = this.props;
    const { quantity } = this.state;
    return (
      <div className="quantity-container">
        <span className="quantity">Quantidade:</span>
        <button
          type="button"
          onClick={() => { this.decreaseItem(changeQuantity); }}
          className="product-decrease-quantity"
          data-testid="product-decrease-quantity"
        >
          -
        </button>
        <span
          className="shopping-cart-product-quantity"
          key="shopping-cart-product-quantity"
          data-testid="shopping-cart-product-quantity"
        >
          {quantity}
        </span>
        <button
          type="button"
          className="product-increase-quantity"
          data-testid="product-increase-quantity"
          onClick={() => { this.increaseItem(changeQuantity); }}
        >
          +
        </button>
      </div>
    );
  }
}
