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

    return (
      <select className="menu-nav">
        {categories.map((category) => (
          <option data-testid="category" key={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    );
  }
}

export default Categories;
