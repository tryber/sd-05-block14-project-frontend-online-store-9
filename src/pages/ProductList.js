import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Search from '../components/Search';
import cartImg from '../images/cart.png';
import logoImg from '../images/logo.png';
import Categories from '../components/Categories';
import List from '../components/List';
import * as api from '../services/api';
import './ProductList.css';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: undefined,
      searchText: undefined,
      category: undefined,
      update: false,
    };
    this.getState = this.getState.bind(this);
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidUpdate() {
    const { category, searchText } = this.state;
    api.getProductsFromCategoryAndQuery(category, searchText)
      .then(({ results }) => this.setState({ products: results }));
  }

  async getProducts() {
    const { category, searchText } = this.state;
    await api.getProductsFromCategoryAndQuery(category, searchText)
      .then(({ results }) => this.setState({ products: results }));
  }

  getState(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  botao() {
    return (
      <button
        data-testid="query-button"
        className="botao"
        type="button"
        onClick={() => {
          this.getProducts();
          this.setState({ update: true });
        }}
      >
        Pesquisar
      </button>
    );
  }

  render() {
    const { category, products } = this.state;
    return (
      <div>
        <header>
          <img className="logoImg" src={logoImg} alt="Logo" />
          <Search
            onSearchTextChange={this.getState}
            // onClick={this.onClick}
          />
          {this.botao()}
          <Link to="/cart" className="shopping-cart-button">
            <img
              className="cartImg"
              data-testid="shopping-cart-button"
              alt="Imagem do Carrinho"
              src={cartImg}
            />
          </Link>
        </header>
        <div>
          <Categories
            category={category}
            onCategoryChange={this.getState}
          />
        </div>
        <div>
          <List products={products} />
        </div>
      </div>
    );
  }
}

export default ProductList;
