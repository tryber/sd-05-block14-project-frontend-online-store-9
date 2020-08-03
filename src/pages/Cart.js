import React, { Component } from 'react';
import Header from '../components/Header';
import CartList from '../components/CartList';
import { getItemFromLocal } from '../services/LocalStorageHandler';
import '../components/CartList.css';

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
      </div>
    );
  }
}
