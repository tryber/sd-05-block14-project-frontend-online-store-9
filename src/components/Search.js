import React, { Component } from 'react';
import Categories from '../components/Categories';
import './Header.css';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      products: [],
    };
    console.log(this.state.searchText)
    this.newData = this.newData.bind(this);
  }

  busca() {
    return (
      <div className="busca">
        <label htmlFor="inputBusca" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.</label><br />
        <input
          data-testid="query-input"
          className="inputBusca"
          name="searchTest"
          type="text"
          onChange={this.newData}
        /><br />
        <Categories />
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
        type="submit"
        onClick={this.detProductor}
      >
      Pesquisar
      </button>
    );
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
