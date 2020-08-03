import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cartImg from '../images/cart.png';
import logoImg from '../images/logo.png';
import { getItemFromLocal } from '../services/LocalStorageHandler';
import './Header.css';

function ContadorCart() {
  return (
    <div className="contador" data-testid="shopping-cart-size">
      {getItemFromLocal().length}
    </div>
  );
}

function CartButton() {
  return (
    <div className="shopping-cart-button">
      <ContadorCart />
      <Link to="/cart">
        <img
          className="cart-image"
          data-testid="shopping-cart-button"
          alt="Imagem do Carrinho"
          src={cartImg}
        />
      </Link>
    </div>
  );
}

export default class Header extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <Link to="/">
            <img className="logoImg" src={logoImg} alt="Logo" />
          </Link>
          <CartButton />
        </header>
      </div>
    );
  }
}
