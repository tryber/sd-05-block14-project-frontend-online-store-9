import React, { Component } from 'react';

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
      <div>
        <input
          data-testid="home-initial-message"
          aria-label="Digite algum termo de pesquisa ou escolha uma categoria."
          name="searchTest"
          tipe="text"
          value={this.state.searchText}
          onChange={this.newData}
        />
      </div>
    );
  }
  selctItem() {
    const onClick = this.props.onClick;
    onClick(this.state);
  }
  botao() {
    return (
      <button
        data-testid="query-button"
        className="lupa"
        type="submit"
        tabIndex="3"
        onClick={this.selctItem}
      >
      Pesquisar
      </button>
    );
  }
  render() {
    return (
      <form>
        {this.botao()}
        {this.busca()}
      </form>
    );
  }
}
