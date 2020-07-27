import React from 'react';
import * as api from '../services/api';

class Categories extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: [],
    }
    this.updateCategories = this.updateCategories.bind(this);
  }
  
  async componentDidMount() {
    const categories = await api.getCategories();
    this.updateCategories(categories);
  }

  updateCategories(newCategories) {
    this.setState({
      categories: newCategories, 
    })
  }

  render() {
    const { categories } = this.state;

    return (
      <select>
        {categories.map((category) => <option key={category.id}>{category.name}</option>)}
      </select>
    )
  }
}

export default Categories;

// 2. Criar página de listagem de produtos vazia
// A tela básica da plataforma é a tela de listagem de produtos, onde quem usa buscará o que quer para adicionar ao carrinho e filtrará suas buscas.

// Esta página deve ficar no path /.
// Mostre a mensagem "Digite algum termo de pesquisa ou escolha uma categoria.".
// Adicione o atributo data-testid com o valor home-initial-message no elemento da mensagem.
