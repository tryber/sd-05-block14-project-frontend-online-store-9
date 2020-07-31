import React, { Component } from 'react';
import ProductCard from './ProductCard';
import './List.css';

export default class List extends Component {
  render() {
    const { products } = this.props;
    return !products ? (
      <span
        data-testid="home-initial-message"
        className="initial-message"
      >
        Digite algum termo de pesquisa ou escolha uma categoria.
      </span>
    )
      : (
        <div className="productslist">
          {products.map((product) => <ProductCard product={product} key={product.id} />)}
        </div>
      );
  }
}
