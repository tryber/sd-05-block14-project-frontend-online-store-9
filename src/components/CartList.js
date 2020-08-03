import React, { Component } from 'react';
import CartVazio from './CarrinhoVazio';
import ItemCart from './ItemCart';
import { getProductById } from '../services/api';

export default class CartList extends Component {
  constructor(props) {
    super(props);
    this.state = { fetchProducts: undefined };
  }

  async componentDidMount() {
    const { products } = this.props;
    if (products.length > 0) {
      const items = [];
        for (let i = 0; i < products.length; i = i + 1) {
          const itemId = products[i];
          const response = await fetch(`https://api.mercadolibre.com/items/${itemId}`);
          const data = await response.json();
          items.push(data);
        }
        this.setState(
          { fetchProducts: items },
        );
    }
  }

  ItensCar() {
    return (
      <div>
        
      </div>
    );
  }

  render() {
    const { fetchProducts } = this.state;
    return !fetchProducts ? (
      <CartVazio />
    )
      : (
        <div className="productslist">
          {fetchProducts.map((product) => (
            <ItemCart
              product={product}
              key={product.id}
            />
          ))}
        </div>
      );
  }
}
