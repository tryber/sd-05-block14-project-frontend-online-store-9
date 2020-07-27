import React, { Component } from 'react';
import Search from '../components/Search';
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
    this.setState({searchText: text})
  }

  render() {
    const { products } = this.state;

    return (
      <div className="productlist-container">
        <div className="category-container">
          categorias
        </div>
        <div className="search-container">
          <Search onClick={this.handleSearch} />
        </div>
        <div>
          Nenhum produto foi encontrado
        </div>
      </div>
    );
  }
}

export default MovieList;
