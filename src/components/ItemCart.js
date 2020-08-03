import React, { Component } from 'react';

class ItemCart extends Component {
  constructor(props) {
    super(props);
    this.state = { initialQuantity: this.props.qtd };
  }

  render() {
    const { product: { title } } = this.props;
    return (
      <div className="item-cart">
        <span
          data-testid="shopping-cart-product-name"
        >
          {title}
        </span>
        <span>

          Quantidade:
          <span
            key="shopping-cart-product-quantity"
            data-testid="shopping-cart-product-quantity"
          >
            1
          </span>
        </span>
      </div>
    );
  }
}

export default ItemCart;
