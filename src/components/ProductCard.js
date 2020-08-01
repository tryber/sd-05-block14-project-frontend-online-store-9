import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

import AddToCart from '../services/LocalStorageHandler';

export default class ProductCard extends Component {
  render() {
    const { product } = this.props;
    return (
      <div
        data-testid="product"
        className="card"
      >
        <button
          type="button"
          className="product-add-to-cart"
          data-testid="product-add-to-cart"
          onClick={() => { AddToCart(product.id); }}
        >
          Adicionar ao carrinho
        </button>
        <img className="card-image" src={product.thumbnail} alt={product.title} />
        <h4 className="card-title">{product.title}</h4>
        <p className="card-price">{product.price}</p>
        <Link
          to={`/details/${product.id}`}
          data-testid="product-detail-link"
        >
          Ver detalhes
        </Link>
      </div>
    );
  }
}
