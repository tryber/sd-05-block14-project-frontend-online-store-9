import React from 'react';
import * as api from '../services/api';
import '../pages/ProductList.css';

const CategoryOption = (props) => (
  <label
    htmlFor={props.value}
  ><br />
    <input
      type="radio"
      className="categoryItens"
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
      <div className="menu-nav">
        <span><strong>Categorias</strong></span>
        <div>
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
      </div>
    );
  }
}

export default Categories;
