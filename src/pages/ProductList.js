import React, { Component } from 'react';
import Search from '../components/Search';
import Categories from '../components/Categories';
import './ProductList.css';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: undefined,
      searchText: undefined,
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    const text = event.target.value;
    this.setState({ searchText: text });
  }

  render() {
    return (
      <div className="productlist-cover container">
        <div className="category container">
          <Categories />
        </div>
        <div className="main container">
          <div className="search container">
            <Search onClick={this.handleSearch} />
          </div>
          <div>
            Nenhum produto foi encontrado
          </div>
        </div>
      </div>
    );
  }
}

export default MovieList;
