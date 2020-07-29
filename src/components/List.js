import React, { Component } from 'react';
import ProductCard from './ProductCard';

export default class List extends Component {
  render() {
    const { products } = this.props;
    return !products ? (
      <span
        data-testid="home-inital-message"
      >
        Digite algum termo de pesquisa ou escolha uma categoria.
      </span>
    )
      : (
        <div>
          {products.map((product) => <ProductCard product={product} />)}
        </div>
      );
  }
}
