import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

export default class ProductCard extends Component {
  render() {
    const { product } = this.props;
    return (
      <Link to={`/details/${product.id}`} data-testid="product-detail-link">
        <div
          data-testid="product"
          className="card"
        >
          <img className="card-image" src={product.thumbnail} alt={product.title} />
          <h4 className="card-title">{product.title}</h4>
          <p className="card-price">{product.price}</p>
        </div>
      </Link>
    );
  }
}

