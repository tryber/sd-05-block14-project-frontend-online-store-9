import React, { Component } from 'react';
import CartVazio from './CarrinhoVazio';
import ItemCart from './ItemCart';

export default class CartList extends Component {
  constructor(props) {
    super(props);
    this.state = { fetchProducts: undefined };
  }

  async componentDidMount() {
    const { products } = this.props;
    if (products.length > 0) {
      const promisesArr = [];
      for (let i = 0; i < products.length; i += 1) {
        const itemId = products[i];
        promisesArr.push(fetch(`https://api.mercadolibre.com/items/${itemId}`));
      }

      Promise.all(promisesArr)
      .then((response) => Promise.all(response.map((item) => item.json())))
      .then((data) => this.setState({ fetchProducts: data }));
    }
  }

  ItensCar() {
    return (
      <div>
        
      </div>
    );
  }

  render() {
    const { fetchProducts } = this.state;
    return !fetchProducts ? (
      <CartVazio />
    )
      : (
        <div className="productslist">
          {fetchProducts.map((product) => (
            <ItemCart
              product={product}
              key={product.id}
            />
          ))}
        </div>
      );
  }
}
