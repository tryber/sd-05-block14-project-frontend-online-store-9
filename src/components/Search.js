import React, { Component } from 'react';
import * as api from '../services/api';
import './Header.css';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      products: [],
    };
    this.newData = this.newData.bind(this);
    this.detProductor = this.detProductor.bind(this);
  }

  busca() {
    return (
      <div className="busca">
        <label htmlFor="inputBusca" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </label>
        <br />
        <input
          data-testid="query-input"
          className="inputBusca"
          name="searchTest"
          type="text"
          onChange={this.newData}
        /><br />
      </div>
    );
  }

  newData(event) {
    const text = event.target.value;
    this.setState({ searchText: text });
  }

  botao() {
    return (
      <button
        data-testid="query-button"
        className="botao"
        type="button"
        onClick={this.detProductor}
      >
        Pesquisar
      </button>
    );
  }

  async detProductor(searchText) {
    console.log(this.state.searchText)
    await api.getProductsFromCategoryAndQuery(undefined, this.state.searchText)
    .then((data) => this.setState({ products: data.results }));
    console.log(this.state.products)
  }

  render() {
    return (
      <form className="search">
        {this.botao()}
        {this.busca()}
      </form>
    );
  }
}
