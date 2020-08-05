import React, { Component } from 'react';
import ProductQuantity from './ProductQuantity';

class ItemCart extends Component {
  constructor(props) {
    super(props);
    const { quantity } = this.props;
    this.state = { quantity };
    this.changeQuantity = this.changeQuantity.bind(this);
  }

  changeQuantity(newQuantity) {
    this.setState({ quantity: newQuantity });
  }

  render() {
    const { product: { title, initial_quantity: initialQuantity } } = this.props;
    const { quantity } = this.state;
    return (
      <div className="item-cart">
        <span
          className="shopping-cart-product-name"
          data-testid="shopping-cart-product-name"
        >
          {title}
        </span>
        <ProductQuantity
          changeQuantity={this.changeQuantity}
          quantity={quantity}
          initialQuantity={initialQuantity}
        />
      </div>
    );
  }
}

export default ItemCart;
