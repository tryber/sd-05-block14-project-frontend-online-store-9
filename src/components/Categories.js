import React from 'react';
import * as api from '../services/api';
import './Header.css';

const CategoryOption = (props) => (
  <label
    htmlFor={props.value}
  >
    <input
      type="radio"
      name="category"
      data-testid="category"
      value={props.value}
      onChange={props.onCategoryChange}
    />
    {props.name}
  </label>
);

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = { categories: [] };
    this.updateCategories = this.updateCategories.bind(this);
  }

  componentDidMount() {
    api.getCategories().then(
      (resolve) => this.updateCategories(resolve),
    );
  }

  updateCategories(newCategories) {
    this.setState({ categories: newCategories });
  }

  render() {
    const { categories } = this.state;
    const { onCategoryChange } = this.props;

    return (
      <div
        className="menu-nav"
      >
        <span>Categorias</span>
        {categories
          .map(({ id, name }) => (
            <CategoryOption
              data-testid="category"
              key={id}
              value={id}
              name={name}
              onCategoryChange={onCategoryChange}
            />
          ))}
      </div>
    );
  }
}

export default Categories;
