import React, { Component } from 'react';
import './Search.css';

export default class Pesquisa extends Component {
  constructor() {
    super();
    this.state = { searchText: '' };
    this.newData = this.newData.bind(this);
    this.selctItem = this.selctItem.bind(this);
  }

  newData(element) {
    const { name, value } = element.target;
    this.setState({ [name]: value });
  }

  busca() {
    return (
      <div className="busca">
        <label htmlFor="inputBusca" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </label>
        <br />
        <input
          className="inputBusca"
          name="searchTest"
          type="text"
          value={this.state.searchText}
          onChange={this.newData}
        />
      </div>
    );
  }

  selctItem() {
    const { onClick } = this.props;
    onClick(this.state);
  }

  botao() {
    return (
      <button
        data-testid="query-button"
        className="botao"
        type="submit"
        onClick={this.selctItem}
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
