import React, { Component } from 'react';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: undefined,
      loading: true,
    };
  }

  render() {
    const { products, loading } = this.state;

    if (!products) {
      return (
        <div>
          <div className="category-container">
            categorias
          </div>
          <div>
            barra de pesquisa
          </div>
          <div>
            Nenhum produto foi encontrado
          </div>
        </div>
      );
    }
  }
}

export default MovieList;
