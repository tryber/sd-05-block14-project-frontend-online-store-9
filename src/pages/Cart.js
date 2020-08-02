import React, { Component } from 'react';
import CartVazio from '../components/CarrinhoVazio';
import Header from '../components/Header';

export default class Cart extends Component {
  render() {
    return (
      <div>
        <Header />
        <CartVazio />
      </div>
    );
  }
}
