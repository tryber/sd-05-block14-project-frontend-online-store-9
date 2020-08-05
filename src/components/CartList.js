import React, { Component } from 'react';
import CartVazio from './CarrinhoVazio';
import ItemCart from './ItemCart';

export default class CartList extends Component {
  constructor(props) {
    super(props);
    const { products } = this.props;
    this.state = {
      products: { ...products },
      fetchProducts: undefined,
    };
  }

  async componentDidMount() {
    const { products } = this.props;
    const itemIds = Object.keys(products);
    if (itemIds.length > 0) {
      const promisesArr = [];
      for (let itemId = 0; itemId < itemIds.length; itemId += 1) {
        promisesArr.push(fetch(`https://api.mercadolibre.com/items/${itemIds[itemId]}`));
      }

      Promise.all(promisesArr)
        .then((response) => Promise.all(response.map((item) => item.json())))
        .then((data) => this.setState({ fetchProducts: data }));
    }
  }

  render() {
    const { fetchProducts, products } = this.state;
    // const { products } = this.props;
    return !fetchProducts ? (
      <CartVazio />
    )
      : (
        <div className="products-list">
          {fetchProducts.map((product) => (
            <ItemCart
              product={product}
              quantity={products[product.id]}
              key={product.id}
            />
          ))}
        </div>
      );
  }
}
