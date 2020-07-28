import React, { Component } from 'react';
import './CarrinhoVazio.css';

class Vazio extends Component {
  render() {
    return (
      <div className="vazio" data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio</div>
    );
  }
}

export default Vazio;
