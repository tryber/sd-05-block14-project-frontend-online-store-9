import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Search from '../components/Search';
import cartImg from '../images/cart.png';
import logoImg from '../images/logo.png';
import * as api from '../services/api';
import './List.css';

export default class List extends Component {
  constructor() {
    super();
    this.state = {
      Products: [],
    }
    this.detProductor = this.detProductor.bind(this);
  }

  async detProductor(searchText) {
    await api.getProductsFromCategoryAndQuery(this.state.categoryId, searchText)
    .then((data) => this.setState({ products: data.results }));
  }

  render() {
    return (
      <div>
        <header>
          {<img className="logoImg" src={logoImg} alt="Logo" />}
          <Search />
          <Link to="/cart" className="shopping-cart-button">
            {<img
              className="cartImg" data-testid="shopping-cart-button"
              alt="Imagem do Carrinho" src={cartImg}
            />}
          </Link>
        </header>
        <div>

        </div>      
      </div>
    );
  }
}
