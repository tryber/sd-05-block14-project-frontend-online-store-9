import React from 'react';
import { Link } from 'react-router-dom';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      product: null,
    }
    this.updateState = this.updateState.bind(this);
  }
  
  updateState(productInfo) {
    this.setState({
      loading: false,
      product: productInfo,
    })
  }

  async componentDidMount() {
    const itemID = this.props.match.params.id;    
    const response = await fetch(`https://api.mercadolibre.com/items/${itemID}`);
    const data = await response.json();
    this.updateState(data);
  }

  render() {
    const { loading, product } = this.state;
    if (loading) return <h1>Carregando...</h1>

    return (
      <div>
        <h1 data-testid='product-detail-name'>{product.title}</h1>
        <img src={product.thumbnail} alt="product thumbnail" />
        <h2>{product.price}</h2>
        <Link to="/">Voltar</Link>
      </div>
    )
  }
}

export default ProductDetails;
