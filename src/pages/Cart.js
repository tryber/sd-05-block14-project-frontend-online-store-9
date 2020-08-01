import React, { Component } from 'react';
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
      <CartList products={items} />
    );
  }
}
