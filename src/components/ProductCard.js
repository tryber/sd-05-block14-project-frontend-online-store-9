import React, { Component } from 'react';
import './ProductCard.css';

export default class ProductCard extends Component {
  render() {
    const { product } = this.props;
    return (
      <div
        data-testid="product"
        className="card"
      >
        <img className="card-image" src={product.thumbnail} alt={product.title} />
        <h4 className="card-title">{product.title}</h4>
        <p className="card-price" onkeyup="maskIt(this,event,'###.###.###,##',true,{pre:'R$'})
">{product.price}</p>
      </div>
    );
  }
}
