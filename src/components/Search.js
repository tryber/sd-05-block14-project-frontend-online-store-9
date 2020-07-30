import React, { Component } from 'react';
import Categories from './Categories';

import './Header.css';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      category: '',
      productList: undefined,
    };
    this.newData = this.newData.bind(this);
  }

  newData(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  busca() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <div className="busca">
        <label htmlFor="inputBusca" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </label>
        <br />
        <input
          data-testid="query-input"
          className="inputBusca"
          name="searchText"
          type="text"
          value={searchText}
          onChange={onSearchTextChange}
        />
      </div>
    );
  }


  botao() {
    const { onClick } = this.props;
    return (
      <button
        data-testid="query-button"
        className="botao"
        type="button"
        onClick={onClick(this.state.productList)}
      >
        Pesquisar
      </button>
    );
  }

  render() {
    return (
      <form className="search">
        {/* {this.botao()} */}
        {this.busca()}
      </form>
    );
  }
}
