import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Search from '../components/Search';
import cartImg from '../images/cart.png';
import logoImg from '../images/logo.png';
import Categories from '../components/Categories';
import ProductCard from '../components/ProductCard';
import './ProductList.css';
import Cart from './Cart';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: undefined,
      searchText: undefined,
    };
  }

  render() {
    const { products } = this.props
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
        <div >
            <Categories/>
        </div>
        <div>
           <ProductCard />
        </div>
      </div>
    );
  }
}

export default ProductList;
