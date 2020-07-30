import React, { Component } from 'react';

export default class ProductCard extends Component {
  render() {
    const { product } = this.props;
    return (
      <div
        data-testid="product"
        className="card"
      >
        <h4>{product.title}</h4>
        <img src={product.thumbnail} alt={product.title} />
        <p>{product.price}</p>
      </div>
    );
  }
}
