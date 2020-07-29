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
    };
    this.onSearch = this.onSearch.bind(this);
  }

  componentDidMount() {
    const { category, searchText } = this.state;
    api.getProductsFromCategoryAndQuery(category, searchText)
      .then(({ result }) => this.setState({ product: result }));
  }

  onSearch(products) {
    this.setState.products(products);
  }

  render() {
    const { searchText, category } = this.state;
    return (
      <div>
        <header>
          <img className="logoImg" src={logoImg} alt="Logo" />
          <Search
            searchText={searchText}
            onSearch={(event) => this.setState({ searchText: event.target.value })}

          />
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
            onCategoryChange={(event) => this.setState({ category: event.target.value })}
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
