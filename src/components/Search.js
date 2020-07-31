import React, { Component } from 'react';

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
      <div>
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

  render() {
    return (
      <form className="search">
        {this.busca()}
      </form>
    );
  }
}
