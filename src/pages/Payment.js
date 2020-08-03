import React from 'react';
import { Link } from 'react-router-dom';

class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '',
    };
    this.confirmPurchase = this.confirmPurchase.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  updateState(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  confirmPurchase() {
    this.setState({
      fullName: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '',
    });
  }

  renderFullName() {
    const { fullName } = this.state;
    return (
      <div>
        <label htmlFor="checkout-fullname">Nome completo:</label>
        <input
          data-testid="checkout-fullname" type="text" name="fullName"
          value={fullName} onChange={this.updateState}
        />
        <br />
      </div>
    );
  }

  renderEmail() {
    const { email } = this.state;
    return (
      <div>
        <label htmlFor="checkout-email">E-mail:</label>
        <input
          data-testid="checkout-email" type="text" name="email"
          value={email} onChange={this.updateState}
        />
        <br />
      </div>
    );
  }

  renderPhone() {
    const { phone } = this.state;
    return (
      <div>
        <label htmlFor="checkout-phone">Telefone:</label>
        <input
          data-testid="checkout-phone" type="text" name="phone"
          value={phone} onChange={this.updateState}
        />
        <br />
      </div>
    );
  }

  renderCpf() {
    const { cpf } = this.state;
    return (
      <div>
        <label htmlFor="checkout-cpf">CPF:</label>
        <input
          data-testid="checkout-cpf" type="text" name="cpf"
          value={cpf} onChange={this.updateState}
        />
        <br />
      </div>
    );
  }

  renderCep() {
    const { cep } = this.state;
    return (
      <div>
        <label htmlFor="checkout-cep">CEP:</label>
        <input
          data-testid="checkout-cep" type="text" name="cep"
          value={cep} onChange={this.updateState}
        />
        <br />
      </div>
    );
  }

  renderAddress() {
    const { address } = this.state;
    return (
      <div>
        <label htmlFor="checkout-address">Endereço:</label>
        <input
          data-testid="checkout-address" type="text" name="address"
          value={address} onChange={this.updateState}
        />
        <br />
      </div>
    );
  }

  render() {
    return (
      <div>
        <div>
          {this.renderFullName()}
          {this.renderEmail()}
          {this.renderPhone()}
          {this.renderCpf()}
          {this.renderCep()}
          {this.renderAddress()}
          <button type="submit" onClick={this.confirmPurchase}>Confirmar</button>
        </div>
        <Link to="/">Voltar</Link>
      </div>
    );
  }
}

export default Payment;
