import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Search from '../components/Search';
import lupaImg from '../images/lupa.png';
import Categories from '../components/Categories';
import List from '../components/List';
import cartImg from '../images/cart.png';
import logoImg from '../images/logo.png';
import { getItemFromLocal } from '../services/LocalStorageHandler';
import * as api from '../services/api';
import './ProductList.css';

/* function ContadorCart() {
  return (
    <div className="contador" data-testid="shopping-cart-size">
      {getItemFromLocal().length}
    </div>
  );
} */

function CartButton() {
  return (
    <div className="shopping-cart-button-list">
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

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: undefined,
      searchText: undefined,
      category: undefined,
      update: false,
      toCart: [],
      contador
    };
    this.getState = this.getState.bind(this);
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidUpdate() {
    <div className="contador" data-testid="shopping-cart-size">
      {getItemFromLocal().length}
    </div>
  }

  async getProducts() {
    const { category, searchText } = this.state;
    await api.getProductsFromCategoryAndQuery(category, searchText)
      .then(({ results }) => this.setState({ products: results }));
  }

  async getState(event) {
    const { name, value } = event.target;
    await this.setState({ [name]: value });
    if (name === 'category') this.getProducts();
  }

  botao() {
    return (
      <button
        data-testid="query-button"
        className="botaoPesquisa"
        type="button"
        onClick={() => {
          this.getProducts();
          this.setState({ update: true });
        }}
      >
        <img className="lupa" alt="Imagem lupa" src={lupaImg} />
      </button>
    );
  }

  render() {
    const { category, products } = this.state;
    return (
      <div>
        <header className="header">
          <Link to="/">
            <img className="logoImg" src={logoImg} alt="Logo" />
          </Link>
          <Search
            onSearchTextChange={this.getState}
            onClick={this.onClick}
          />
          {this.botao()}
          <CartButton />
        </header>
        <div className="body">
          <div>
            <Categories
              category={category}
              onCategoryChange={this.getState}
            />
          </div>
          <List products={products} />
        </div>
      </div>
    );
  }
}

export default ProductList;
