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
    }
    this.confirmPurchase = this.confirmPurchase.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  updateState(event) {
    const { name, value } = event.target;
    console.log(value);
    console.log(name);
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

  render() {
    const { fullName, email, cpf, phone, cep, address } = this.state;
    return(
      <div>
        <div>

        <label htmlFor="checkout-fullname">Nome completo:</label>
        <input data-testid="checkout-fullname" type="text" value={fullName} name='fullName' onChange={this.updateState}></input>
        <br />

        <label htmlFor="checkout-email">E-mail:</label>
        <input data-testid="checkout-email" type="text" value={email} name='email' onChange={this.updateState}></input>
        <br />

        <label htmlFor="checkout-cpf">CPF:</label>
        <input data-testid="checkout-cpf" type="text" value={cpf} name='cpf' onChange={this.updateState}></input>
        <br />

        <label htmlFor="checkout-phone">Telefone:</label>
        <input data-testid="checkout-phone" type="text" value={phone} name='phone' onChange={this.updateState}></input>
        <br />

        <label htmlFor="checkout-cep">CEP:</label>
        <input data-test-id="checkout-cep" type="text" value={cep} name='cep' onChange={this.updateState}></input>
        <br />

        <label htmlFor="checkout-address">Endereço:</label>
        <input data-testid="checkout-address" type="text" value={address} name='address' onChange={this.updateState}></input>
        
        <br />
        <button type="submitt" onClick={this.confirmPurchase}>Confirmar</button>
        <br />

        </div>
        <Link to="/">Voltar</Link>
      </div>
    )
  }
}

export default Payment;
// Elemento "Nome completo" deve possuir o atributo data-testid com o valor checkout-fullname.
// Elemento "Email" deve possuir o atributo data-testid com o valor checkout-email.
// Elemento "CPF" deve possuir o atributo data-testid com o valor checkout-cpf.
// Elemento "Telefone" deve possuir o atributo data-testid com o valor checkout-phone.
// Elemento "CEP" deve possuir o atributo data-testid com o valor checkout-cep.
// Elemento "Endereço" deve possuir o atributo data-testid com o valor checkout-address.