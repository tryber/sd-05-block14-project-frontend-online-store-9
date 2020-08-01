import React, { Component } from 'react';
import { getItemFromLocal } from '../services/LocalStorageHandler'

export default class ContadorCart extends Component {

  contador() {
    return ( 
      <div className="contador" data-testid="shopping-cart-size">
        {getItemFromLocal().length}
      </div> 
    );
  }  
  render() {
    return (
      <div>
        {this.contador()}
      </div>
    );
  }
}
