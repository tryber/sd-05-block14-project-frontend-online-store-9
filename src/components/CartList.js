import React, { Component } from 'react';
import CartVazio from './CarrinhoVazio';
import ItemCart from './ItemCart';

export default class CartList extends Component {
  render() {
    const { products } = this.props;
    return !products ? (
      <CartVazio />
    )
      : (
        <div className="productslist">
          {products.map((product) => <ItemCart product={product} key={product.id} />)}
        </div>
      );
  }
}
