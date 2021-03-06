import React from 'react';
import { Link } from 'react-router-dom';
import { AddToCart } from '../services/LocalStorageHandler';
import Header from '../components/Header';
import './ProductDetails.css';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      product: null,
      newComment: '',
      commentList: [],
    };
    this.updateState = this.updateState.bind(this);
    this.botaoAdd = this.botaoAdd.bind(this);
    this.addComment = this.addComment.bind(this);
    this.updateCommentList = this.updateCommentList.bind(this);
  }

  async componentDidMount() {
    const itemId = this.props.match.params.id;
    const response = await fetch(`https://api.mercadolibre.com/items/${itemId}`);
    const data = await response.json();
    this.updateState(data);
  }

  updateState(productInfo) {
    this.setState({
      loading: false,
      product: productInfo,
    });
  }

  addComment() {
    this.setState((prevState) => ({
      commentList: [...prevState.commentList, prevState.newComment],
      newComment: '',
    }));
  }

  updateCommentList(event) {
    this.setState({ newComment: event.target.value });
  }

  botaoAdd() {
    return (
      <button
        data-testid="product-detail-add-to-cart"
        className="cart-button-add"
        type="button"

        onClick={() => {
          const { match: { params: { id } } } = this.props;
          AddToCart(id);
        }}
      >
        Adicionar ao Carrinho
      </button>
    );
  }

  render() {
    const { loading, product, newComment, commentList } = this.state;

    if (loading) return <h1>Carregando...</h1>;

    return (
      <div>
        <Header />
        <div className="detailsBody">
          <Link className="linkClass" to="/">Voltar</Link>
          <div className="content">
            <div className="detailsCard">
              <h1 data-testid="product-detail-name">{product.title}</h1>
              <img className="imagemDet" src={product.thumbnail} alt="product thumbnail" />
              <h2>{`R$ ${Number(product.price).toFixed(2)}`}</h2>
              {this.botaoAdd()}
            </div>
            <div className="commentBar">
              <label htmlFor="commentBar">Escreva um comentário sobre o produto:</label><br />
              <input
                data-testid="product-detail-evaluation" type="text" id="commentBar"
                value={newComment} onChange={this.updateCommentList}
              />
              <button type="submitt" onClick={this.addComment}>Enviar</button>
              <ul>
                {commentList.map((comment, index) => <li className="comentario" key={`${index + 1}`}>{comment}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
