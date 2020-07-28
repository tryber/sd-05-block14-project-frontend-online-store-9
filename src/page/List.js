import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Search from '../components/Search';
import cartImg from '../images/cart.png';
import logoImg from '../images/logo.png';
import './List.css';

export default class List extends Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }
  onClick(event) {
    this.setState({ searchText: event.target.value });
  }
  render() {
    return (
      <div>
        <header>
          {<img className="logoImg" src={logoImg} alt="Logo" />}
          <Search onClick={this.onClick} />
          <Link to="/cart" className="shopping-cart-button">
            {<img
              className="cartImg" data-testid="shopping-cart-button"
              alt="Imagem do Carrinho" src={cartImg}
            />}
          </Link>
        </header>
      </div>
    );
  }
}
