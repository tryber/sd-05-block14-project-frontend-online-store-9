import React from 'react';
import * as api from '../services/api';
import './Header.css';

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = { categories: [] };
    this.updateCategories = this.updateCategories.bind(this);
  }

  async componentDidMount() {
    const categories = await api.getCategories();
    this.updateCategories(categories);
  }

  updateCategories(newCategories) {
    this.setState({ categories: newCategories });
  }

  render() {
    const { categories } = this.state;
    const { onCategoryChange } = this.props;

    return (
      <select
        className="menu-nav"
        onChange={onCategoryChange}
        name="category"
        // value={categories[0].id}
      >
        <option>Categorias</option>
        {categories
          .map(({ id, name }) => (
            <option
              data-testid="category"
              key={id}
              value={id}
            >
              {name}
            </option>
          ))}
      </select>
    );
  }
}

export default Categories;
