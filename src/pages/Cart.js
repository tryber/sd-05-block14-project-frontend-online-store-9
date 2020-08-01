import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartVazio from '../components/CarrinhoVazio';

export default class Cart extends Component {
  render() {
    return (
      <div>
        <CartVazio />
        <Link to="/payment">
          <button data-testeid="checkout-products">Finalizar a compra</button>
        </Link>
      </div>
    );
  }
}
