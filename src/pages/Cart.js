import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import CartList from '../components/CartList';
import { getItemFromLocal } from '../services/LocalStorageHandler';

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = { items: getItemFromLocal() };
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        <Header />
        <CartList products={items} />
        <Link to="/payment">
          <button data-testid="checkout-products">Finalizar a compra</button>
        </Link>
      </div>
    );
  }
}
